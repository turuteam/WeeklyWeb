import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home({ articles }) {
  return (
    <Layout>
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
          <div className="col-start-1 col-end-4 ">
            <div className="mb-5 mt-5 font-serif text-2xl">Disclaimer</div>
            <p className="justify-content pb-10 text-justify">
              Le immagini presenti su Weekly sono tratte da internet in quanto
              valutate di pubblico dominio. Nel caso di valutazione impropria o
              utilizzo di immagini protette da copyright vi preghiamo di
              inoltrare richiesta ai nostri contatti, in modo da procedere con
              la sostituzione del contenuto.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
