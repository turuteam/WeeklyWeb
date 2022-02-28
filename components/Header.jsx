import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/it' 
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/Weekly_logo_colore_Weekly_logo_colore.png'

import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="container mx-auto mb-8 px-2 mt-3">
      <div className="inline-block flex w-full items-center justify-between border-b border-gray-400 py-8 ">
        <div className='absolute left-55 top-1 invisible md:visible font-semibold'>
          {moment().format('DD MMMM YYYY')}
        </div>
        <Link href="https://www.weeklyweb.it">
          <Image
            className="logo hover:animate-pulse"
            src={logo}
            alt="WEEKLYweb.it"
            width={140}
            height={40}
          />
        </Link>
        <div>
          <div className="md:hidden">
            <div
              className="space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            <div className={isNavOpen ? 'showMenuNav fixed' : 'hideMenuNav'}>
              <div className='absolute top-8 right-9' onClick={() => setIsNavOpen(false)}>
                <svg
                  className="h-9 w-9 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col justify-evenly text-center h-[700px]">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className=" text-weekly ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Link href={`/category/${category.slug}`}>
                    <span className="mt-2 ml-4 cursor-pointer align-middle font-bold text-black text-xl hover:text-weekly md:float-right ">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/firme`}>
                  <span className="mt-2 ml-4 cursor-pointer align-middle font-bold text-black text-xl hover:text-weekly md:float-right ">
                    Firme
                  </span>
                 </Link>
              </li>
            </ul>
            </div>
          </div>
          
          <div className="hidden md:flex lg:text-lg flex-col items-end">
            <div className='flex flex-row-reverse'>
              <Link href='/firme'>
                <span className="transition-duration-700 mt-2 ml-4 cursor-pointer align-middle font-bold text-black hover:text-weekly">
                  Firme
                </span>
              </Link>
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <span className="transition-duration-700 mt-2 ml-4 cursor-pointer align-middle font-bold text-black hover:text-weekly">
                    {category.name}
                  </span>
                </Link>
                ))}
            </div>

            {/* Social buttons  */}

            <div className="md:flex flex-row gap-4 mt-2">
              <Link href='https://www.facebook.com/WeeklyRedazione'>
                <span className="hover:text-weekly hover:scale-125">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                      className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512">
                      <path fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                      </path>
                  </svg>
                </span>
                
              </Link>
              <Link href='https://twitter.com/Weekly_it'>
              <span className="hover:text-weekly hover:scale-125">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                      className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                      </path>
                </svg>
              </span>
                
              </Link>
              <Link href='https://www.instagram.com/weekly.it/'>
                <span className="hover:text-weekly hover:scale-125">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                      className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                      </path>
                  </svg>
                </span>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hideMenuNav {
          display: none;
        }

        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  )
}

export default Header
