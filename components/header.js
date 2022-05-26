import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Header() {
    const { t, lang } = useTranslation('common')
    const item1 = t('item-1')
    const item2 = t('item-2')
    const item3 = t('item-3')
    const switchLanguage = t('switch-language')

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
                              <a>{item1}</a>
                          </li>
                          <li>
                              <a>{item2}</a>
                          </li>
                          <li>
                              <a>{item3}</a>
                          </li>
                      </ul>
                  </div>
                  <a className="btn btn-ghost normal-case text-xl">Lingo</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                      <li>
                          <a href="#one">{item1}</a>
                      </li>
                      <li>
                          <a href="#one">{item2}</a>
                      </li>

                      <li>
                          <a>{item3}</a>
                      </li>
                  </ul>
              </div>
              <div className="navbar-end">
                  <Link href="/" locale="en">
                      <a>{switchLanguage}</a>
                  </Link>
              </div>
          </div>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>

  )
}
