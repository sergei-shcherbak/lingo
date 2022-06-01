import React, {useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ContactImage from '../public/assets/svg/contact-image.svg'

export default function SectionContact() {
    const recaptchaRef = React.createRef();

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Execute the reCAPTCHA when the form is submitted
        recaptchaRef.current.execute();
    }

    const onReCAPTCHAChange = async (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the
        try {
            let data = {
                name, phone, email, message, captcha: captchaCode
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // If the response is ok than show the success alert
                console.log('Response received')
            } else {
                // Else throw an error with the message returned
                // from the API
                const error = await response.json();
                throw new Error(error.message)
            }
        } catch (error) {
            alert(error?.message || "Something went wrong");
        } finally {
            // Reset the reCAPTCHA when the request has failed or succeeeded
            // so that it can be executed again if user submits another email.
            recaptchaRef.current.reset();
            setSubmitted(true)
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')
        }
    }

    return (<>
        <section id="contact" className="container mx-auto text-center py-6 mb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                Call to Action
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"/>
            </div>
            <div className="px-8 grid gap-8 grid-cols-1
                md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Lets talk about everything!
                        </h2>
                        <div className="mt-8">
                            Hate forms? Send us an <span className="underline">email</span>{" "}
                            instead.
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <ContactImage/>
                    </div>
                </div>
                <div className="">
                    <form className="w-full max-w-lg text-gray-700">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                >
                                    Name
                                </label>
                                <input
                                    className="appearance-none block w-fullborder rounded py-3 border-gray-200
                                    px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    name='name'
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                                {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-phone"
                                >
                                    Phone
                                </label>
                                <input
                                    className="appearance-none block w-full border
                                    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
                                    focus:bg-white focus:border-gray-500"
                                    id="grid-phone"
                                    type="tel"
                                    placeholder="+xx-xxx-xxx-xxx"
                                    name='phone'
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-email"
                                >
                                    E-mail
                                </label>
                                <input
                                    className="appearance-none block w-full border
                                    border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                                    focus:bg-white focus:border-gray-500"
                                    id="grid-email"
                                    type="email"
                                    name='email'
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className=" no-resize appearance-none block w-full
                                    border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                                    focus:bg-white focus:border-gray-500 h-48 resize-none"
                                    id="message"
                                    defaultValue={""}
                                    name='message'
                                    onChange={(e) => {
                                        setMessage(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex-col md:flex-col md:items-center">
                            <div className="mt-8">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_GCP_RECAPTCHA_PUBLIC_KEY}
                                    onChange={onReCAPTCHAChange}
                                />
                            </div>
                            <div className="mt-8">
                                <button
                                    className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800
                                    font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none
                                    focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                    onClick={(e) => {
                                        handleSubmit(e)
                                    }}>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </section>

    </>)
}




