import TravelBooking from "../public/assets/svg/travel-booking.svg";
import ConnectedWorld from "../public/assets/svg/connected-world.svg";

export default function SectionFirst() {
    return (
        <>
            <section id="one" className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Title
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"/>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Lorem ipsum dolor sit amet
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                                ipsum eu nunc commodo posuere et sit amet ligula.
                                <br/>
                                <br/>
                                Images from:
                                <a className="text-pink-500 underline" href="https://undraw.co/">
                                    undraw.co
                                </a>
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 p-6">
                            <TravelBooking/>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <ConnectedWorld/>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    at ipsum eu nunc commodo posuere et sit amet ligula.
                                    <br/>
                                    <br/>
                                    Images from:
                                    <a className="text-pink-500 underline" href="https://undraw.co/">
                                        undraw.co
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}