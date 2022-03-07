import { ArticleCard, Categories, ArticleWidget } from '../components'
import { getArticles } from '../services'
import FeaturedArticles from '../sections/FeaturedArticles'
import Layout from '../components/Layout'
import Video from '../components/Video'

export default function Home({ articles }) {
  return (
    <Layout>
      <div className="container mx-auto mb-8 px-10">
        <FeaturedArticles />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {articles.map((article, index) => (
              <ArticleCard article={article.node} key={index} />
            ))}
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <Video />
              <ArticleWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = (await getArticles()) || []

  return {
    props: { articles },
  }
}
