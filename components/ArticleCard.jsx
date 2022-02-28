import React from 'react';
import moment from 'moment';
import Link from 'next/link';


const ArticleCard = ({ article }) => {

  if(article.isInterview){
    return ( 
    <div className='shadow-lg p-0 lg:p-0 pb-0 mb-8 rounded-lg'>
      <div className='border-8 border-solid rounded-md border-weekly p-3  pb-3 hover:animate-pulse'>
        <span className='absolute -mt-7 -ml-50w-full flex justify-center text-white bg-weekly uppercase text-base
        font-semibold font-sans tracking-wide whitespace-pre'>  L'Intervista  </span>
        <div className='font-semibold text-2xl uppercase '>
          <Link href={`/article/${article.slug}`}>
            {article.title}
          </Link>
        </div>
      </div>
  </div>
  )
  }
  else{
    return(
      <div>
      <div className='bg-weekly shadow-lg rounded-lg p-0 lg:p-0 pb-0 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img src={article.featuredImage.url} 
              alt={article.title}
              
              className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg'
           />
        </div>
        <h1 className='text-white transition duration-700 text-center text-3xl mb-8 cursor-pointer hover:underline font-semibold pb-1'>
          <Link href={`/article/${article.slug}`}> 
            {article.title}
          </Link>
        </h1>
        
        <div className='text-white block lg:flex text-center items-center justify-center mb-8 w-full lg:pb-10'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img src={article.author.photo?.url}
                alt={article.author.name}
                height="30px"
                width="30px" 
                className='align-middle rounded-full'
                />
                <p className='inline align-middle text-white-700 ml-2 text-lg'>{article.author.name}</p>
          </div>
          <div className="font-medium text-white-700"></div>
            <span>
              {moment(article.createdAt).format('D MMMM YYYY')}
            </span>
        </div>
    </div>
  </div>

    )}

  
};

export default ArticleCard;
