import Head from 'next/head'
import { ArticleCard, Categories, ArticleWidget } from '../components'
import { getArticles } from '../services'
import FeaturedArticles from '../sections/FeaturedArticles'

export default function Home({ articles }) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Weekly</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <FeaturedArticles />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {articles.map((article) => (
            <ArticleCard article={article.node} key={article.title} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <ArticleWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const articles = (await getArticles()) || []

  return {
    props: { articles },
  }
}
