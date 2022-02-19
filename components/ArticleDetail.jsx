import moment from 'moment'
import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const renderText = ({ text, italic, bold, underline }) => {
  if (!bold && !italic && !underline) return text
  if (bold && !italic && !underline) return <b>{text}</b>
  if (!bold && italic && !underline) return <em>{text}</em>
  if (!bold && !italic && underline) return <u>{text}</u>
  if (bold && italic && !underline)
    return (
      <b>
        <em>{text}</em>
      </b>
    )
  if (bold && italic && underline)
    return (
      <b>
        <em>
          <u>{text}</u>
        </em>
      </b>
    )
  if (!bold && italic && underline)
    return (
      <em>
        <u>{text}</u>
      </em>
    )
  return text
}

const renderLink = ({ children, href }, index) => {
  return (
    <a className='underline underline-offset-1' href={href}>
      {children.map((content, index) => (
        <React.Fragment key={index}>{content.text}</React.Fragment>
      ))}
    </a>
  )
}

const contentRenderer = {
  paragraph: ({ children }) => {
    return (
      <p className="mb-8">
        {children.map((p, index) => (
          <React.Fragment key={index}>
            {!p.type && renderText(p)}
            {p.type === 'link' && renderLink(p)}
          </React.Fragment>
        ))}
      </p>
    )
  },
  'heading-two': ({ children }) => {
    return (
      <h2 className="mb-4 text-3xl font-semibold">
        {children.map((content, index) => (
          <React.Fragment key={index}>{content.text}</React.Fragment>
        ))}
      </h2>
    )
  },
  'heading-three': ({ children }) => {
    return (
      <h3 className="mb-4 text-2xl font-semibold">
        {children.map((content, index) => (
          <React.Fragment key={index}>{renderText(content)}</React.Fragment>
        ))}
      </h3>
    )
  },
  'heading-four': ({ children }) => {
    return (
      <h4 className="mb-4 text-xl font-semibold">
        {children.map((content, index) => (
          <React.Fragment key={index}>{renderText(content)}</React.Fragment>
        ))}
      </h4>
    )
  },
  'block-quote': ({ children }) => {
    return (
      <blockquote className="quote border-l-4 border-neutral-500 bg-neutral-100 p-4 italic text-neutral-600">
        {children.map((content, index) => (
          <React.Fragment key={index}>{renderText(content)}</React.Fragment>
        ))}
      </blockquote>
    )
  },
  image: ({ children, height, mimeType, src, title, width, handle }) => {
    return (
      <img
        class="object-none object-center"
        alt={title}
        height={height}
        width={width}
        src={src}
      />
    )
  },
  iframe: ({ children, height, url, width, handle }) => {
    return (
      <iframe
        class="object-none object-center"
        width={width}
        height={height}
        src={url}
      ></iframe>
    )
  },
  link: renderLink,
  embed: ({ nodeType, nodeId }, references) => {
    if (!nodeId) return ''
    const ref = references.find((r) => r.id === nodeId)
    if (!ref) return ''
    return (
      <React.Fragment>
        {nodeType === 'TwitterEmbed' && nodeId && (
          <TwitterTweetEmbed tweetId={ref.embedId} />
        )}
        {nodeType !== 'TwitterEmbed' && `${nodeType} is missing renderer`}
      </React.Fragment>
    )
  },
}

const ArticleDetail = ({ article }) => {
  return (
    <div className="mb-8 bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={article.featuredImage.url}
          alt={article.title}
          className="h-full w-full object-cover object-top  shadow-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mr-8 hidden items-center items-center justify-center md:flex lg:mb-0 lg:w-auto">
            <img
              alt={article.author.name}
              height="30px"
              width="30px"
              className="rounded-full align-middle"
              src={article.author.photo.url}
            />
            <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
              {article.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-weekly"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(article.createdAt).format('DD MMM YYYY')}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-4xl font-semibold">{article.title}</h1>

        {article.content.raw.children.map((typeObj, index) => {
          return (
            <React.Fragment key={index}>
              {(contentRenderer[typeObj.type] || contentRenderer.paragraph)(
                typeObj,
                article.content.references
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default ArticleDetail
// export default AddThis;
