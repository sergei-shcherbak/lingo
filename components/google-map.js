import React from "react";

export default function GoogleMap(){
    const defaultProps = {
        center: {
            lat: 52.2666508,
            lng: 8.0477925
        },
        zoom: 16
    };

    return (
        // Important! Always set the container height explicitly
        /*<div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyASIVmCf05dfrUMySiOp8tUQr4WS4lVpeE" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={52.2666508}
                    lng={8.0477925}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>*/
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.718824226843!2d8.047792516208712!3d52.266650779767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e58561923ead%3A0x5cd2b1bcb6075a4d!2sLingo*21%20Language%20for%20your%20business!5e0!3m2!1sen!2spl!4v1653817395987!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    );
}