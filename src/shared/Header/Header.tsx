import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const navigation = [
  { number: '1.', name: 'Projects', href: '/projects', external: false },
  {
    number: '2.',
    name: 'Blogs',
    href: 'https://medium.com/@grant.tyler.harrison',
    external: true,
  },
  { number: '3.', name: 'Resume', href: '/resume', external: false },
  { number: '4.', name: 'Calculator', href: '/calculator', external: false },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40"
              height="40"
            >
              <path
                fill="#333333"
                d="M33.4 41c0-.8.3-1.5.9-2.1H13.6c.6.6.9 1.3.9 2.1 0 .9-.4 1.8-1.2 2.4l-.1.1h21.6l-.1-.1c-.9-.7-1.3-1.5-1.3-2.4zM38.8 43.5H9.1c-1.2 0-2.2 1-2.2 2.3s1 2.3 2.2 2.3h29.7c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z"
                className="color333 svgShape"
              />
              <path
                fill="#f0f0f0"
                d="M38.8 45H9.1c-.4 0-.8.3-.8.8s.3.8.8.8h29.7c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                className="colore9e9e9 svgShape"
              />
              <path
                fill="#333333"
                d="M46.4 0H1.6C.7 0 .1.7.1 1.5v35.9c0 .8.7 1.5 1.5 1.5h44.9c.8 0 1.5-.7 1.5-1.5V1.5C47.9.7 47.3 0 46.4 0z"
                className="color333 svgShape"
              />
              <path
                fill="#f0f0f0"
                d="M1.5 29.9h44.9v7.4H1.5z"
                className="colore9e9e9 svgShape"
              />
              <path
                fill="#364f6b"
                d="M1.5 1.5h44.9v27.7H1.5z"
                className="color535a5b svgShape"
              />
              <path
                fill="#ffffff"
                d="M43.4 26.9h-5.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5V11.5c0-.4.3-.8.8-.8s.8.3.8.8v14.7c-.1.4-.4.7-.8.7zM43.4 9.4c-.4 0-.8-.3-.8-.8v-.8c0-.4.4-.8.8-.8s.8.3.8.8v.9c-.1.4-.4.7-.8.7z"
                className="colorfff svgShape"
              />
              <path
                fill="#333333"
                d="M46.4 29.4H1.5c-.4 0-.8.3-.8.8s.3.8.8.8h44.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                opacity=".15"
                className="color333 svgShape"
              />
              <circle
                cx="24.6"
                cy="34.3"
                r="2.1"
                fill="#333333"
                opacity=".15"
                className="color333 svgShape"
              />
              <path
                fill="#d2d2d2"
                d="M15.4 38.9c.8 1.5.7 3.2-.3 4.6h17.6c-1-1.4-1.1-3.2-.3-4.6h-17z"
                className="colord2d2d2 svgShape"
              />
              <path
                fill="#333333"
                d="M15.4 38.9c.3.6.5 1.3.6 2h16c0-.7.2-1.4.6-2H15.4z"
                opacity=".15"
                className="color333 svgShape"
              />
              <circle
                cx="23.9"
                cy="33.6"
                r=".9"
                fill="#43dde6"
                className="color4fc4e8 svgShape"
              />
              <path
                fill="#333333"
                d="M23.9 31.5c-1.2 0-2.1 1-2.1 2.1s1 2.1 2.1 2.1c1.2 0 2.1-1 2.1-2.1s-.9-2.1-2.1-2.1zm0 3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
                className="color333 svgShape"
              />
              <path
                fill="#333333"
                d="M3.5 3.5h42.9v-2H1.5v27.7h2z"
                opacity=".15"
                className="color333 svgShape"
              />
              <path
                fill="#333333"
                d="M46.4 28.4H1.5c-.4 0-.8.3-.8.8s.3.8.8.8h44.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                className="color333 svgShape"
              />
              <path
                fill="#e44b7a"
                d="M12.4 7.5h19.2c.4 0 .7-.3.7-.8S32 6 31.6 6H12.4c-.4 0-.8.3-.8.8s.4.7.8.7z"
                className="colore44b4b svgShape"
              />
              <path
                fill="#fc5185"
                d="M9 10.8c0 .4.3.8.8.8h6.5c.4 0 .8-.3.8-.8s-.5-.8-.9-.8H9.7c-.4 0-.7.3-.7.8zM25.8 11.5c.4 0 .8-.3.8-.8s-.4-.7-.8-.7h-5.6c-.4 0-.8.3-.8.8s.3.8.8.8h5.6z"
                className="colore451a2 svgShape"
              />
              <path
                fill="#797979"
                d="M5.6 15.5h9.2c.4 0 .8-.3.8-.8s-.3-.7-.8-.7H5.6c-.4 0-.8.3-.8.8s.4.7.8.7zM18.1 14.8c0 .4.3.8.8.8H34c.4 0 .8-.3.8-.8s-.4-.8-.8-.8H18.9c-.4 0-.8.3-.8.8z"
                className="color797979 svgShape"
              />
              <path
                fill="#fc5185"
                d="M8 18c-.4 0-.8.3-.8.8s.3.8.8.8h4.5c.4 0 .8-.3.8-.8s-.4-.8-.9-.8H8zM15.5 18c-.4 0-.8.3-.8.8s.3.8.8.8h6.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8h-6.9zM34 18h-6.9c-.4 0-.8.3-.8.8s.3.8.8.8H34c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                className="colore451a2 svgShape"
              />
              <path
                fill="#797979"
                d="M10.2 22H5.6c-.4 0-.8.3-.8.8s.3.8.8.8h4.6c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM32.8 22h-4.6c-.4 0-.8.3-.8.8s.3.8.8.8h4.6c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM24.6 22H13.1c-.4 0-.8.3-.8.8s.3.8.8.8h11.5c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                className="color797979 svgShape"
              />
              <path
                fill="#e44b7a"
                d="M5.6 7.5h3.2c.4 0 .8-.3.8-.8S9.2 6 8.8 6H5.6c-.4 0-.7.3-.7.8s.3.7.7.7z"
                className="colore44b4b svgShape"
              />
            </svg>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold leading-6 text-gray-200"
              >
                <span className="number-list">{item.number}</span>
                {' ' + item.name}
              </a>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-200"
              >
                <span className="number-list">{item.number}</span>
                {' ' + item.name}
              </NavLink>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-400/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="40"
                height="40"
              >
                <path
                  fill="#333333"
                  d="M33.4 41c0-.8.3-1.5.9-2.1H13.6c.6.6.9 1.3.9 2.1 0 .9-.4 1.8-1.2 2.4l-.1.1h21.6l-.1-.1c-.9-.7-1.3-1.5-1.3-2.4zM38.8 43.5H9.1c-1.2 0-2.2 1-2.2 2.3s1 2.3 2.2 2.3h29.7c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z"
                  className="color333 svgShape"
                />
                <path
                  fill="#f0f0f0"
                  d="M38.8 45H9.1c-.4 0-.8.3-.8.8s.3.8.8.8h29.7c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                  className="colore9e9e9 svgShape"
                />
                <path
                  fill="#333333"
                  d="M46.4 0H1.6C.7 0 .1.7.1 1.5v35.9c0 .8.7 1.5 1.5 1.5h44.9c.8 0 1.5-.7 1.5-1.5V1.5C47.9.7 47.3 0 46.4 0z"
                  className="color333 svgShape"
                />
                <path
                  fill="#f0f0f0"
                  d="M1.5 29.9h44.9v7.4H1.5z"
                  className="colore9e9e9 svgShape"
                />
                <path
                  fill="#364f6b"
                  d="M1.5 1.5h44.9v27.7H1.5z"
                  className="color535a5b svgShape"
                />
                <path
                  fill="#ffffff"
                  d="M43.4 26.9h-5.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5V11.5c0-.4.3-.8.8-.8s.8.3.8.8v14.7c-.1.4-.4.7-.8.7zM43.4 9.4c-.4 0-.8-.3-.8-.8v-.8c0-.4.4-.8.8-.8s.8.3.8.8v.9c-.1.4-.4.7-.8.7z"
                  className="colorfff svgShape"
                />
                <path
                  fill="#333333"
                  d="M46.4 29.4H1.5c-.4 0-.8.3-.8.8s.3.8.8.8h44.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                  opacity=".15"
                  className="color333 svgShape"
                />
                <circle
                  cx="24.6"
                  cy="34.3"
                  r="2.1"
                  fill="#333333"
                  opacity=".15"
                  className="color333 svgShape"
                />
                <path
                  fill="#d2d2d2"
                  d="M15.4 38.9c.8 1.5.7 3.2-.3 4.6h17.6c-1-1.4-1.1-3.2-.3-4.6h-17z"
                  className="colord2d2d2 svgShape"
                />
                <path
                  fill="#333333"
                  d="M15.4 38.9c.3.6.5 1.3.6 2h16c0-.7.2-1.4.6-2H15.4z"
                  opacity=".15"
                  className="color333 svgShape"
                />
                <circle
                  cx="23.9"
                  cy="33.6"
                  r=".9"
                  fill="#43dde6"
                  className="color4fc4e8 svgShape"
                />
                <path
                  fill="#333333"
                  d="M23.9 31.5c-1.2 0-2.1 1-2.1 2.1s1 2.1 2.1 2.1c1.2 0 2.1-1 2.1-2.1s-.9-2.1-2.1-2.1zm0 3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
                  className="color333 svgShape"
                />
                <path
                  fill="#333333"
                  d="M3.5 3.5h42.9v-2H1.5v27.7h2z"
                  opacity=".15"
                  className="color333 svgShape"
                />
                <path
                  fill="#333333"
                  d="M46.4 28.4H1.5c-.4 0-.8.3-.8.8s.3.8.8.8h44.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                  className="color333 svgShape"
                />
                <path
                  fill="#e44b7a"
                  d="M12.4 7.5h19.2c.4 0 .7-.3.7-.8S32 6 31.6 6H12.4c-.4 0-.8.3-.8.8s.4.7.8.7z"
                  className="colore44b4b svgShape"
                />
                <path
                  fill="#fc5185"
                  d="M9 10.8c0 .4.3.8.8.8h6.5c.4 0 .8-.3.8-.8s-.5-.8-.9-.8H9.7c-.4 0-.7.3-.7.8zM25.8 11.5c.4 0 .8-.3.8-.8s-.4-.7-.8-.7h-5.6c-.4 0-.8.3-.8.8s.3.8.8.8h5.6z"
                  className="colore451a2 svgShape"
                />
                <path
                  fill="#797979"
                  d="M5.6 15.5h9.2c.4 0 .8-.3.8-.8s-.3-.7-.8-.7H5.6c-.4 0-.8.3-.8.8s.4.7.8.7zM18.1 14.8c0 .4.3.8.8.8H34c.4 0 .8-.3.8-.8s-.4-.8-.8-.8H18.9c-.4 0-.8.3-.8.8z"
                  className="color797979 svgShape"
                />
                <path
                  fill="#fc5185"
                  d="M8 18c-.4 0-.8.3-.8.8s.3.8.8.8h4.5c.4 0 .8-.3.8-.8s-.4-.8-.9-.8H8zM15.5 18c-.4 0-.8.3-.8.8s.3.8.8.8h6.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8h-6.9zM34 18h-6.9c-.4 0-.8.3-.8.8s.3.8.8.8H34c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                  className="colore451a2 svgShape"
                />
                <path
                  fill="#797979"
                  d="M10.2 22H5.6c-.4 0-.8.3-.8.8s.3.8.8.8h4.6c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM32.8 22h-4.6c-.4 0-.8.3-.8.8s.3.8.8.8h4.6c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM24.6 22H13.1c-.4 0-.8.3-.8.8s.3.8.8.8h11.5c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
                  className="color797979 svgShape"
                />
                <path
                  fill="#e44b7a"
                  d="M5.6 7.5h3.2c.4 0 .8-.3.8-.8S9.2 6 8.8 6H5.6c-.4 0-.7.3-.7.8s.3.7.7.7z"
                  className="colore44b4b svgShape"
                />
              </svg>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ),
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
