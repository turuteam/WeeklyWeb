import Head from 'next/head'
import { ArticleCard, Categories, ArticleWidget } from '../components'


const articles = [
  { title: "React Testing"},
  { title: "React Tailwind"},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Weekly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {articles.map((article)=> <ArticleCard article={article} key={article.title}/>)}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <ArticleWidget />
            <Categories />
          </div>
        </div>

        
      </div>

      
    </div>
  )
}
