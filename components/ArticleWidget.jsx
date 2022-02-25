import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/it';
import Link from 'next/link';

import { getRecentArticles, getSimilarArticles } from '../services';


const ArticleWidget = ({ categories, slug }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  

  useEffect(() => {
      if(slug) {
        getSimilarArticles(categories, slug).then((result) => setRelatedArticles(result))
      }else{
        getRecentArticles().then((result) => setRelatedArticles(result))
      }
  }, [slug])
  console.log(relatedArticles)

  return(
    <div className='bg-white shadow-lg p-8 mb-8'>
      
        <h3 className='text-l mb-8 font-semibold border-t-4 border-weekly uppercase text-black '>
          {slug ? 'Della stessa categoria ' : 'Ultime da weekly'}
        </h3>
        {relatedArticles.map((article) => (
          <div key={article.title} className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <img 
                src={article.featuredImage.url} 
                alt={article.title}
                height="100px"
                width="100px"
                className='align-middle rounded'
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 font-xs'>
                {moment(article.createdAt).format('D MMMM YYYY')}
              </p>
              <Link href={`/article/${article.slug}`} key={article.title} className='text-base'>
                {article.title}
              </Link>
            </div>

          </div>

        
        ))}
    </div>

  ) 
};

export default ArticleWidget;
//

//striscia spessa sopra
//overline decoration-4 decoration-blue