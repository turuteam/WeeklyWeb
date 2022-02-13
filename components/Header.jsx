import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../images/Weekly_logo_colore_Weekly_logo_colore.png"


import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return <div className='container mx-auto px-10 mb-8'>
          <div className="border-b w-full inline-block border-gray-400 py-8 ">
            <div className="md:float-left block">
              <Link href="/">
                <Image className='logo' src={logo} alt="WEEKLYweb.it" width={140} height={40}/>
              </Link>
            </div>
            <div className="md:float-right block ml-10 italic">
            La settimana in breve
            </div>
        <div className="hidden md:float-left md:contents lg:text-lg">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-bold cursor-pointer transition-duration-700 hover:text-weekly ">{category.name}</span>
            </Link>
          ))}
        </div>
        
        
        
      </div>

  </div>;
};

export default Header;
