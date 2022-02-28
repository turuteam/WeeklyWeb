import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home({ articles }) {
  return (
    <Layout>
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
          <div className="col-start-1 col-end-4 ">
            <div className="mb-5 mt-5 font-serif text-2xl">Informativa</div>
            <p className="justify-content pb-10 text-justify">
              Tutti i contenuti di Weekly possono essere utilizzati da altre
              testate o siti internet. È molto gradito in caso citare la fonte
              con un link (follow) o collegamento visibile a weeklyweb.it e alla
              pagina dell'articolo.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
