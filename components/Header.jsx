import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../images/Weekly_logo_colore_Weekly_logo_colore.png"

const categories = [{name: 'Ambiente', slug: 'ambiente'}, { name: 'Internazionale', slug: 'internazionale'}]

const Header = () => {
  return <div className='container mx-auto px-10 mb-8'>
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
          <Image className='logo' src={logo} alt="WEEKLYweb.it" width={140} height={40}/>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

  </div>;
};

export default Header;
