import moment from 'moment';
import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import {TwitterTweetEmbed} from 'react-twitter-embed';

//import Script from 'react-load-script';

/* const AddThis = (props) => {
    useEffect(() => {
        if (window.addthis) {
            window.addthis.update('share', 'url', props.url); 
        }
    }, [props.url]);

    const handleAddthisLoaded = () => {
        window.addthis.init();
        window.addthis.update('share', 'url', props.url);
    }; */

const ArticleDetail = ({ article }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }          
        }

        switch (type) {
            case 'heading-two':
              return <h2 key={index} className="text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
            case 'heading-three':
              return <h3 key={index} className="text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
              return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
              return <h4 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
              return (
                <img class="object-none object-center"
                  key={index}
                  alt={obj.title}
                  height={obj.height}
                  width={obj.width}
                  src={obj.src}
                />
              );
            case 'block-quote':
              return (
                <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote" key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</blockquote>
              )
            case 'link':
              console.log({obj, modifiedText})
                return <a key={index} href={obj.href}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</a>
            case 'iframe': 
              console.log({obj, modifiedText})
              return <iframe class="object-none object-center" key={index} width={obj.width} height={obj.height} src={obj.url}></iframe>
            case 'embed':
              return < TwitterTweetEmbed  key={index} tweetId={obj.embedId} />


            default:
              console.log({type})
              return modifiedText;
        }
    };

    console.log('json', article.content.json)
    console.log('references', article.content.references)

  return (
    <div className='bg-white shadow-lg lg:p-8 pb-12 mb-8'> 
        <div className='relative overflow-hidden shadow-md mb-6'>
            <img 
                src={article.featuredImage.url}
                alt={article.title}
                className='object-top h-full w-full object-cover  shadow-lg'
            />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={article.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={article.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{article.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-weekly" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(article.createdAt).format('DD MMM YYYY')}</span>
            </div>
          </div>
            <h1 className='mb-8 text-4xl font-semibold'>{article.title}</h1>
          

            {/* <RichText 
              content={article.content.raw}
              renderers={{
                embed: {
                  TwitterEmbed: ({ embedId }) => {
                    return (
                      <TwitterTweetEmbed tweetId={embedId} />
                    );
                  },
                },
              }} 
            />*/}
            
            {article.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                return getContentFragment(index, children, typeObj, typeObj.type)      
            })}

        </div>
      </div>
  );
          };

export default ArticleDetail;
// export default AddThis;
