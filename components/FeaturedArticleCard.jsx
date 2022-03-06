import React from 'react';
import moment from 'moment';
import 'moment/locale/it' 
import Image from 'next/image';
import Link from 'next/link';

const FeaturedArticleCard = ({ article }) => (
    
  <div className="relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${article.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(article.createdAt).format('D MMMM YYYY')}</p>
      <p className="text-white mb-4 text-shadow font-semibold text-base text-center">{article.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={article.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={article.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-semibold">{article.author.name}</p>
      </div>
    </div>
    <Link href={`/article/${article.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
  
);

export default FeaturedArticleCard;