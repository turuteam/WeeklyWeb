import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

import {
  getArticleDetails,
  getArticles,
  getArticlesDetails,
} from '../../services'

import {
  ArticleDetail,
  Categories,
  ArticleWidget,
  Author,
  Loader,
} from '../../components'

import { AdjacentArticles } from '../../sections'

const ArticleDetails = ({ article }) => {
  const router = useRouter()

  const metaSeo = {
    ...article?.seo,
    createdAt: article?.createdAt,
  }

  console.log(metaSeo)
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <Layout metaSeo={metaSeo} isArticle>
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <ArticleDetail article={article} />
            <Author author={article.author} />
            <AdjacentArticles
              slug={article.slug}
              createdAt={article.createdAt}
            />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <ArticleWidget
              slug={article.slug}
              categories={article.categories.map((category) => category.slug)}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleDetails

export async function getStaticProps({ params }) {
  const data = await getArticleDetails(params.slug)

  return {
    props: { article: data },
  }
}

export async function getStaticPaths() {
  const articles = await getArticles()

  return {
    paths: articles.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
