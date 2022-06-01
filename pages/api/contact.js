import fetch from "node-fetch";

export default async function (req, res) {

    const {body, method} = req;

    // Extract the email and captcha code from the request body
    const {name, phone, email, message, captcha} = body;

    if (method === "POST") {
        // If email or captcha are missing return an error
        if (!email || !captcha) {
            return res.status(422).json({
                message: "Unproccesable request, please provide the required fields",
            });
        }

        try {
            // Ping the google recaptcha verify API to verify the captcha code you received
            const response = await fetch(
                `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                    },
                    method: "POST",
                }
            );
            const captchaValidation = await response.json();
            /**
             * The structure of response from the veirfy API is
             * {
             *  "success": true|false,
             *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
             *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
             *  "error-codes": [...]        // optional
        }
             */
            if (captchaValidation.success) {
                // Replace this with the API that will save the data received
                // to your backend
                let nodemailer = require('nodemailer')
                const transporter = nodemailer.createTransport({
                    port: 465,
                    host: "smtp.gmail.com",
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_PASSWORD,
                    },
                    secure: true,
                });

                const mailData = {
                    from: process.env.GMAIL_EMAIL,
                    to: process.env.GMAIL_EMAIL,
                    subject: `Message From ${req.body.name}`,
                    text: req.body.message + " | Sent from: " + req.body.email,
                    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
                }

                transporter.sendMail(mailData, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                })
                // Return 200 if everything is successful
                return res.status(200).send("OK");
            }

            return res.status(422).json({
                message: "Unproccesable request, Invalid captcha code",
            });
        } catch (error) {
            console.log(error);
            return res.status(422).json({message: "Something went wrong"});
        }
    }

    // Return 404 if someone pings the API with a method other than
    // POST
    return res.status(404).send("Not found");
}