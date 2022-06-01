import HeaderLine from '../public/assets/svg/header-line.svg'
import useTranslation from "next-translate/useTranslation";


export default function HeroPost() {
    const {t, lang} = useTranslation('common')
    const heroTitle = t('hero-title')
    const heroMessage = t('hero-message')
    const heroBtn = t('hero-btn')
    return (
        <>
            <div id="quiz" className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/*Left Col*/}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <h1 className="my-4 text-5xl font-bold leading-tight">
                            {heroTitle}
                        </h1>
                        <p className="leading-normal text-2xl mb-8">
                            {heroMessage}
                        </p>
                        <button
                            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            {heroBtn}
                        </button>
                    </div>
                    {/*Right Col*/}
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <img className="w-full md:w-4/5 z-50" src="hero.png"/>
                        {/*<Logo/>*/}
                    </div>
                </div>
            </div>
            <div className="relative -mt-12 lg:-mt-24">
                <HeaderLine/>
            </div>

        </>
    )
}




