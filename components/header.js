import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Header() {
    const {t, lang} = useTranslation('common')
    const quiz = t('quiz')
    const benefits = t('benefits')
    const services = t('services')
    const map = t('map')
    const contact = t('contact')

    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-black text-xl">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a href="#quiz">{quiz}</a>
                            </li>
                            <li>
                                <a href="#benefits">{benefits}</a>
                            </li>
                            <li>
                                <a href="#services">{services}</a>
                            </li>
                            <li>
                                <a href="#map">{map}</a>
                            </li>
                            <li>
                                <a href="#contact">{contact}</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Lingo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <a href="#quiz">{quiz}</a>
                        </li>
                        <li>
                            <a href="#benefits">{benefits}</a>
                        </li>
                        <li>
                            <a href="#services">{services}</a>
                        </li>
                        <li>
                            <a href="#map">{map}</a>
                        </li>
                        <li>
                            <a href="#contact">{contact}</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/" locale={useRouter().locales.find(loc => loc.localeCompare(useRouter().locale))}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-10 w-10"
                             viewBox="0 0 640 512">
                            <path d="M448 164C459 164 468 172.1 468 184V188H528C539 188 548 196.1 548 208C548 219 539 228 528
                      228H526L524.4 232.5C515.5 256.1 501.9 279.1 484.7 297.9C485.6 298.4 486.5 298.1 487.4 299.5L506.3
                      310.8C515.8 316.5 518.8 328.8 513.1 338.3C507.5 347.8 495.2 350.8 485.7 345.1L466.8 333.8C462.4
                      331.1 457.1 328.3 453.7 325.3C443.2 332.8 431.8 339.3 419.8 344.7L416.1 346.3C406 350.8 394.2 346.2
                       389.7 336.1C385.2 326 389.8 314.2 399.9 309.7L403.5 308.1C409.9 305.2 416.1 301.1 422 298.3L409.9
                       286.1C402 278.3 402 265.7 409.9 257.9C417.7 250 430.3 250 438.1 257.9L452.7 272.4L453.3 272.1C465.7
                       259.9 475.8 244.7 483.1 227.1H376C364.1 227.1 356 219 356 207.1C356 196.1 364.1 187.1 376 187.1H428V183.1C428
                       172.1 436.1 163.1 448 163.1L448 164zM160 233.2L179 276H140.1L160 233.2zM0 128C0 92.65 28.65 64 64
                       64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM320
                        384H576V128H320V384zM178.3 175.9C175.1 168.7 167.9 164 160 164C152.1 164 144.9 168.7 141.7 175.9L77.72
                         319.9C73.24 329.1 77.78 341.8 87.88 346.3C97.97 350.8 109.8 346.2 114.3 336.1L123.2 315.1H196.8L205.7
                          336.1C210.2 346.2 222 350.8 232.1 346.3C242.2 341.8 246.8 329.1 242.3 319.9L178.3 175.9z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
        </nav>

    )
}
