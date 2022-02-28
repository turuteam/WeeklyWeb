import React from 'react'
import { useRouter } from 'next/router'

import { getCategories, getCategoryArticle } from '../../services'
import { ArticleCard, Categories, Loader } from '../../components'
import Layout from '../../components/Layout'

const CategoryArticle = ({ articles, categoryName }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <Layout>
      <div className="container mx-auto mb-8 px-10">
        <div className="mx-2 my-10 mb-8 text-3xl font-bold">{categoryName}</div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {articles.slug}
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default CategoryArticle

// Fetch data at build time
export async function getStaticProps({ params }) {
  const articles = await getCategoryArticle(params.slug)
  const categories = await getCategories()
  const currentCategory = categories.find((cat) => cat.slug === params.slug)

  return {
    props: { articles, categoryName: currentCategory.name },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
