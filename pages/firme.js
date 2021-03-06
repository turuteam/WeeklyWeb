import Layout from '../components/Layout'
import Image from 'next/image'
import raffaeleB from '../public/images/raffaeleB2.jpg'
import sofia from '../public/images/sofia2.jpg'
import alessandro from '../public/images/alessandro2.jpg'
import sara from '../public/images/sara2.jpg'
import giuliaB from '../public/images/giuliaB.JPG'
import federica from '../public/images/federica.jpg'
import giorgia from '../public/images/giorgia2.jpeg'
import raffaeleP from '../public/images/raffaeleP.jpg'
import chiara from '../public/images/chiara.jpeg'
import lorenzo from '../public/images/lorenzo.JPG'
import greta from '../public/images/greta.jpg'
import pasquale from '../public/images/pasquale.jpg'
import micol from '../public/images/micol.jpeg'
import andrea from '../public/images/andrea.jpg'
import fabiana from '../public/images/fabiana2.jpg'
import erica from '../public/images/erica.jpg'
import giuliaC from '../public/images/giuliaC.jpg'
import laura from '../public/images/laura.jpg'
import simona from '../public/images/simona.jpg'

export default function Home({ articles }) {
  return (
    <Layout>
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="col-span-3 ">
            <div className="mx-5 mb-5 mt-5 font-serif text-3xl">
              La redazione
            </div>
            {/* First row */}
            <div className="flex flex-col items-stretch lg:flex-row">
              <div className="dropshadow-lg mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly  p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={raffaeleB}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm  font-medium text-white md:text-lg">
                        Lucano di nascita, ho studiato a Bologna. Al venerd??
                        sera penso ancora di viverci. In sei anni ho cambiato
                        quattro citt??. Quando sono triste ascolto De Andr??,
                        quando sono felice pure. Mi piace costruire domande. Ho
                        una meta ma devo identificarla, nel frattempo continuo a
                        camminare.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">
                        Raffaele Riccardo Buccolo
                      </div>
                      <div className="text-slate-300">
                        Direttore Responsabile ed editoriale
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="dropshadow-lg mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={sofia}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Altro che radici, le origini sono catene. Compreso
                        questo, tutto in discesa: essere siciliana ?? la skill di
                        cui vado pi?? fiera. Scrivo per distinguere le cose, non
                        esiste giusto o sbagliato, ma la complessit?? nauseabonda
                        a volte della realt??. Citofonate D???Arrigo per media,
                        politici birbanti e storie molto umane (ma anche per il
                        resto).
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Sofia D'Arrigo</div>
                      <div className="text-slate-300">
                        Direttore Responsabile ed editoriale
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8  md:p-4">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={alessandro}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Sono nato in Romagna (terra ???solatia, dolce paese???, come
                        scriveva Pascoli) e da qui mi sposto sempre a
                        malincuore. Leggo, scrivo, mi guardo intorno e cerco di
                        capire il mondo attraverso la lettura e la scrittura.
                        Guardo un sacco di film e monto un sacco di Lego, ma a
                        volte esco anche di casa per andare in libreria.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Alessandro Mambelli</div>
                      <div className="text-slate-300">Vicedirettore</div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>

            {/* Second row */}

            <div className="flex flex-col items-stretch lg:flex-row">
              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={sara}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm  font-medium text-white md:text-lg">
                        L???unica bolognese che forse non mangia rag?? e
                        tortellini. Vegana per l???etica e per l???ambiente.
                        Cucinare sano mi fa stare bene. Nel sangue e nel cuore
                        la Calabria (pap??) e la Sardegna (mamma). Macino
                        chilometri a piedi e nuotando in piscina. Solo il cinema
                        o uno Spritz riescono a tenermi ferma. Raccontare la
                        realt?? ?? ci?? che mi viene meglio.{' '}
                        <i>Could you be loved</i> di Bob Marley ?? il mio mantra.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Sara Ausilio</div>
                      <div className="text-slate-300">Vicedirettrice</div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3 items-stretch">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={giuliaB}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Umile umanista di Novara, cresciuta tra campi di basket
                        e montagne di libri. Non dico mai no a una fetta di
                        pizza e a una passeggiata tra amici. Leggo, guardo e
                        ascolto tutto ci?? che d?? senso e ordine al (mio) mondo.
                        Per lo stesso motivo, scrivo. Non amo le etichette, ma
                        se dovessi sceglierne una per me sarebbe ???pragmatica???.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Giulia Battista</div>
                      <div className="text-slate-300">Redattrice</div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full w-full rounded-xl bg-weekly p-8 md:p-4">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={federica}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Nata fra le colline Marchigiane, cresciuta a pane e
                        racconti. Ho subito conosciuto il potere delle parole e
                        ho deciso di farne la mia vocazione. Antirazzista,
                        femminista, supporter dei diritti LGBTQ+ e del diritto
                        di autodeterminazione di tutt*. Mi appassionano le
                        leggende e le storie dimenticate, nascoste dal tempo,
                        tra le strade delle nostre citt?? o negli angoli del web.
                        Mi piace decostruire stereotipi e ricercare nei luoghi
                        pi?? bui quell??? umanit?? che ci accomuna tutt*.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Federica Morichetti</div>
                      <div className="text-slate-300">Redattrice</div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>

            {/* Third row */}

            <div className="flex flex-col items-stretch lg:flex-row">
              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={giorgia}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm  font-medium text-white md:text-lg">
                        Abruzzese (con due ???B???) d???origine ed emiliana di vita o
                        passaggio. Non mangio animali e mi interesso di
                        ambiente, arte e diversit?? nel mondo.Conoscere,
                        informare e sensibilizzare i miei verbi all???infinito
                        presente preferiti.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Gioriga Persico</div>
                      <div className="text-slate-300">Redattrice</div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={raffaeleP}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Quando parlo, si sente subito il DNA sardo. Amo scoprire
                        e raccontare gli eventi e gli oggetti precedenti al
                        2000. Fin da piccolo mi appassionano le automobili
                        d'epoca, la gastronomia, la televisione e le riviste del
                        passato. Racconto storie a fumetti attraverso Car Crash
                        Fumetti e fotografo auto per strada. Non ho mai visto
                        una serie Netflix per?? conosco quasi a memoria tutte le
                        puntate de Il Commissario Rex e di Squadra Speciale
                        Cobra 11.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Raffaele Pitzalis</div>
                      <div className="text-slate-300">Redattore</div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full w-full rounded-xl bg-weekly p-8 md:p-4">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={chiara}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Torinese solo sulla carta di identit??, (anzi neanche l??,
                        vivo in provincia, ma la citt?? fa pi?? figo). Sono a
                        volte distratta e procrastinatrice seriale, ma ho anche
                        dei difetti. Scrivere mi riesce pi?? semplice che parlare
                        quando voglio dire qualcosa di vero e importante. Mi
                        interesso di tutto perch?? spesso non riesco a scegliere-
                        tranne che per il cinema, quello lo scelgo sempre-
                        lascio che a guidarmi sia la mia grande curiosit?? e non
                        la categoria.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Chiara Verra</div>
                      <div className="text-slate-300">Redattrice</div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>

            {/* Fourth row */}

            <div className="flex flex-col items-stretch lg:flex-row">
              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={lorenzo}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm  font-medium text-white md:text-lg">
                        Padovano di nascita, come Greta convivo con nebbia e
                        umidit??, con l???unica differenza che ancora non ho
                        imparato a conviverci. Avrei fatto il pittore, ma la
                        filosofia mi ha portato via con s??, assieme alla sua
                        continua spinta ad interrogare e interrogarmi. Amo ci??
                        che ?? altrove, lontano, geograficamente e non. Amo il
                        viaggio e chi reca sul volto una storia e non ha paura
                        di raccontarla. Ma su tutto amo scrivere, cercare un
                        finale per non trovarlo, vivere sorprendendomi.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Lorenzo Zamana</div>
                      <div className="text-slate-300">Redattore</div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={greta}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Cresciuta tra la nebbia della bassa padana, non temo
                        alcun tasso di umidit??. Porto con me la macchina
                        fotografica anche quando la meta sono quattro passi
                        sull???argine, anzi, soprattutto se la meta ?? quella.
                        Lavoro a maglia, a volte ascoltando il punk hardcore.
                        Voglio sempre sapere perch??, l???obiettivo ?? non farsene
                        un difetto; essere qui ?? un buon modo per provarci.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Greta Contardi</div>
                      <div className="text-slate-300">
                        Redattrice e Social Media Analyst
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={pasquale}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        O pi?? semplicemente Ambro. Non perch?? non voglia
                        rivelare le mie radici da provincia casertana, ma perch??
                        col tempo mi ci sono affezionato. Di indole creativa e
                        ripetutamente anarchica, mi rintano assiduamente nel mio
                        mondo immaginario. Forse ?? anche per questo che mi
                        chiamano "orso". Musicista, ascoltatore insaziabile e
                        fervido collezionista di dischi, grazie alla musica mi
                        sento libero di esplorare, di immergermi in lingue,
                        culture, forme d'arte diverse. Spesso, la mia penna
                        incontra storie e impossibili e popoli lontani.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Pasquale Ambrosino</div>
                      <div className="text-slate-300">
                        Redattore e Social Media Manager
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>

            {/* Fifth row */}

            <div className="flex flex-col items-stretch lg:flex-row">
              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={micol}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm  font-medium text-white md:text-lg">
                        Cresciuta nelle sperdute valli piemontesi, tra corse nei
                        prati, castagne e cieli tersi. Laureata in lettere, ma
                        in una relazione complicata con il latino e la
                        linguistica. Ho una dipendenza dal the e dal caff??. Mi
                        interesso di diritti umani, mi batto per i diritti delle
                        donne.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Micol Maccario</div>
                      <div className="text-slate-300">
                        Redattrice e Social Media Manager
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={andrea}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Il cognome pu?? disorientare ma la Sardegna ?? il luogo
                        dove sono nato e cresciuto. Studiare giornalismo ed
                        editoria mi ha portato a Parma per due anni. Leggo,
                        scrivo, esploro. Attualit??, societ?? e sport la mia
                        calamita principale. Amo avventurarmi in mezzo alla
                        natura e alle montagne nonostante le mie vertigini.
                        Tuttavia non rinnego la filosofia del ???Divano e serie
                        tv???.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Andrea Cical??</div>
                      <div className="text-slate-300">
                        Redattore e Social Media Manager
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={fabiana}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Torinese solo sulla carta di identit??, (anzi neanche l??,
                        vivo in provincia, ma la citt?? fa pi?? figo). Sono a
                        volte distratta e procrastinatrice seriale, ma ho anche
                        dei difetti. Scrivere mi riesce pi?? semplice che parlare
                        quando voglio dire qualcosa di vero e importante. Mi
                        interesso di tutto perch?? spesso non riesco a scegliere-
                        tranne che per il cinema, quello lo scelgo sempre-
                        lascio che a guidarmi sia la mia grande curiosit?? e non
                        la categoria.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Fabiana Fabbrini</div>
                      <div className="text-slate-300">
                        Redattrice e Photo editor
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>

            {/* Sixth row */}

            <div className="flex flex-col items-stretch lg:flex-row">
              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={erica}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm  font-medium text-white md:text-lg">
                        Veneta d???origine, ma viandante. <br></br>In due anni ho
                        traslocato quattro volte. D???estate (e non solo) mi
                        rifugio a 2000 metri. Per metabolizzare i cambiamenti
                        colleziono buchi nell'orecchio sinistro. Mi interesso di
                        ambiente, politica e medio-oriente. Cammino per
                        respirare, scrivo per comprendere. Leggo molto,
                        immortalo tramonti, polemizzo e scendo in piazza, spesso
                        con un bicchiere di birra o vino in mano.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Erica Marconato</div>
                      <div className="text-slate-300">
                        Redattrice e Photo Editor
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={giuliaC}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Siciliana che sogna oltre i confini del mare. Guardo
                        sempre le cose con un certo pessimismo, ecco forse
                        perch?? mi interesso di tematiche ambientali e
                        femminismi. Per?? niente paura, per bilanciare dipingo e
                        l'arte cinematografica (del piccolo e grande schermo) ha
                        un posto nel mio cuore.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Giulia Cerami</div>
                      <div className="text-slate-300">
                        Redattrice e Content Creator
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full w-full rounded-xl bg-weekly p-8 md:p-4">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={laura}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm font-medium text-white md:text-lg">
                        Nata nell'entroterra siciliano. Molto lontana dal mare
                        per sentirne l'odore ma non troppo per sfuggire dalla
                        sua attrazione. Cerco sempre di guardare il mondo dal
                        mio punto di vista "sottosopra". Scatto foto imperfette
                        con estrema imprecisione e leggo per cercarmi tra le
                        righe. Scrivo per liberare quello che non so di provare.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Laura Lipari</div>
                      <div className="text-slate-300">
                        Redattrice e Content Creator
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>

            {/* Seventh row */}

            <div className="flex flex-col items-stretch lg:flex-row">
              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-weekly p-8 md:p-4 ">
                  <div className="md:w-30 mx-auto h-24 w-24 md:h-auto md:rounded-full">
                    <Image
                      className="mx-auto h-24 w-24 justify-center rounded-full object-cover md:h-auto  md:w-48"
                      src={simona}
                      alt=""
                      width="383"
                      height="383"
                    />
                  </div>

                  <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                    <blockquote>
                      <p className="text-left text-sm  font-medium text-white md:text-lg">
                        Pugliese, ma senza accenti n?? radici profonde. Scandisco
                        le mie giornate in base ai pasti principali. Tramite la
                        fotografia cerco di dipanare il tessuto informe dei miei
                        pensieri. Combatto l???ansia coi pennelli. Canto la mia
                        rabbia e bevo le mie paure. Mi piacciono le
                        interpretazioni, andare a fondo, scovare le motivazioni
                        pi?? profonde di ci?? che accade nel mondo e leggere nella
                        mente.
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-300">Simona Losito</div>
                      <div className="text-slate-300">
                        Redattrice e Podcaster
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-white p-8 md:p-4 "></figure>
              </div>

              <div className="mx-5 my-5 basis-1/3">
                <figure className=" h-full rounded-xl bg-white p-8 md:p-4 "></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
