import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../images/Weekly_logo_colore_Weekly_logo_colore.png"


import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className="flex justify-between items-center border-b w-full inline-block border-gray-400 py-8 ">
            <Link href="/">
              <Image className='logo' src={logo} alt="WEEKLYweb.it" width={140} height={40}/>
            </Link>
            <div>
              <div className="md:hidden">
                <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                  <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                  <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                  <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                </div>
                  <ul className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div onClick={() => setIsNavOpen(false)}><svg class="h-8 w-8 text-gray-600"  viewBox="0 0 24 24"  
                                                                fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  
                                                                stroke-linejoin="round">  
                                                                <line x1="18" y1="6" x2="6" y2="18" /> 
                                                                <line x1="6" y1="6" x2="18" y2="18" />
                                                                </svg>
                    </div>
                    {categories.map((category, index) => (
                        <li key={index} className="hover:translate-y-3 text-weekly transition-duration-700" onClick={() => setIsNavOpen(false)} >                                                                                                                                                                                                                            
                          <Link href={`/category/${category.slug}`}>
                              <span className="md:float-right mt-2 align-middle text-black ml-4 font-bold cursor-pointer transition-duration-700 hover:text-weekly ">{category.name}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
              </div>  
              <div className="hidden block lg-10 italic">
                La settimana in breve
              </div>
              <div className="hidden md:contents lg:text-lg">
                {categories.map((category, index) => (
                  <Link key={index} href={`/category/${category.slug}`}>
                      <span className="md:float-right mt-2 align-middle text-black ml-4 font-bold cursor-pointer transition-duration-700 hover:text-weekly ">{category.name}</span>
                  </Link>
                ))}
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

export default Header;
