import TravelBooking from "../public/assets/svg/travel-booking.svg";
import ConnectedWorld from "../public/assets/svg/connected-world.svg";
import useTranslation from "next-translate/useTranslation";

export default function SectionBenefits() {
    const {t, lang} = useTranslation('common')
    const benefitsTitle = t('benefits-title')
    const benefitsFirstTitle = t('benefits-first-title')
    const benefitsFirstMessage = t('benefits-first-message')
    const benefitsSecondTitle = t('benefits-second-title')
    const benefitsSecondMessage = t('benefits-second-message')

    return (
        <>
            <section id="benefits" className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        {benefitsTitle}
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"/>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                {benefitsFirstTitle}
                            </h3>
                            <p className="text-gray-600 mb-8">
                                {benefitsFirstMessage}
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
                                    {benefitsSecondTitle}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {benefitsSecondMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}