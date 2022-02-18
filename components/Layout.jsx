
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head'
import { ArticleCard } from '.';

const Layout = ({ metaSeo = {}, isArticle = false, children }) => {
  return (
  <>
    <Head>
      <title>{metaSeo?.metaTitle || 'default value'} </title>
      <link rel="icon" href="/favicon2.ico" />
      <meta description={metaSeo?.metaDescription || 'default value'} />

      <meta name='og:title' content={metaSeo?.metaTitle || 'default value'} />
      <meta name='og:description' content={metaSeo?.metaDescription || 'default value'} />
      <meta name='og:url' content={`http://www.weeklyweb.it/category/${metaSeo?.metaSlug}`} />
      <meta name='og:site_name' content={'Weekly'} />
      <meta property='og:locale' content={'it_IT'} key='og:locale' />

      {isArticle && (
        <>
          <meta property='og:type' content='article' key='og:type' />
          <meta property='og:image' content={`${metaSeo?.ogImage.url}`} key='og:image' />
          <meta name='twitter:card' content='summary_large_image' key='twitter:card' />
          <meta property='article:published_time' content={metaSeo?.createdAt} key='article:published_time' />
        </>
      )}
    </Head>
    <Header />
    {children}
    <Footer />
  </>
)};

export default Layout;