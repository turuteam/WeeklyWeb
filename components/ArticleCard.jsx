import React from 'react';
import moment from 'moment';
import Link from 'next/link';


const ArticleCard = ({ article }) => {
  console.log(article);

  return ( <div>
      <div className='bg-black shadow-lg rounded-lg p-0 lg:p-0 pb-0 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img src={article.featuredImage.url} 
              alt={article.title}
              className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
           />
        </div>
        <h1 className='text-white transition duration-700 text-center text-3xl mb-8 cursor-pointer hover:underline font-semibold pb-1'>
          <Link href={`/article/${article.slug}`}> 
            {article.title}
          </Link>
        </h1>
        
        <div className='text-white block lg:flex text-center items-center justify-center mb-8 w-full lg:pb-10'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img src={article.author.photo.url}
                alt={article.author.name}
                height="30px"
                width="30px" 
                className='align-middle rounded-full'
                />
                <p className='inline align-middle text-white-700 ml-2 text-lg'>{article.author.name}</p>
          </div>
          <div className="font-medium text-white-700"></div>
            <span>
              {moment(article.createdAt).format('DD MMM YYYY')}
            </span>

            

        </div>
    </div>
  </div>


  )
};

export default ArticleCard;
