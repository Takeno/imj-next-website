import {ReactElement} from 'react';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import Link from 'next/link';
import {BookOpenIcon, DocumentTextIcon} from '@heroicons/react/outline';
import balance from '../assets/ema-2-balance.jpeg';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Italian Magic Judges</title>
        <meta
          name="description"
          content="Benvenuti sul sito ufficiale degli arbitri italiani di Magic!"
        />
      </Head>
      <main className="flex flex-col h-full">
        <div className="flex-1">
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <Header />

                <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="mt-10 sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">
                        Italian Magic Judges
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Benvenuti sul sito ufficiale degli arbitri italiani di
                      Magic!
                    </p>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Questo sito vuole essere un punto di riferimento per gli
                      arbitri, ma anche per chi vorrebbe diventarlo o
                      semplicemente vuole saperne di più sul nostro gioco
                      preferito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={balance.src}
                alt="Balance"
              />
            </div>
          </div>

          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
              <Link href="/risorse">
                <a>
                  <h2 className="tracking-tight font-bold text-3xl hover:underline text-orange-500">
                    Documenti utili
                  </h2>
                </a>
              </Link>
              <p className="text-xl">
                Regole ufficiali e altri documenti utili per gestire i tuoi
                tornei.
              </p>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
              <div className="grid lg:grid-cols-2 mb-6">
                <div className="col-span-1">
                  <h2 className="tracking-tight font-bold text-gray-900 text-3xl">
                    Rubriche
                  </h2>
                  <p className="text-xl">
                    Approfondimenti su regole, meccaniche, gestione dei tornei,
                    e tutto quello di cui hai bisogno per rimanere aggiornato.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <div className="justify-center">
                  <Link href="/rubriche/carta-del-mese">
                    <a>
                      <h2 className="text-xl font-bold py-4 hover:underline text-orange-500">
                        Carta del Mese
                      </h2>
                    </a>
                  </Link>
                  <p className="text-md">
                    Ogni mese un articolo dedicato ad una staple di un formato
                    così da essere preparati alle domande più frequenti.
                  </p>
                </div>
                <div className="justify-center">
                  <Link href="/rubriche/report-torneo">
                    <a>
                      <h2 className="text-xl font-bold py-4 hover:underline text-orange-500">
                        Report di Torneo
                      </h2>
                    </a>
                  </Link>
                  <p className="text-md">
                    Racconti e condivisioni di esperienze tra i tavoli di gioco.
                  </p>
                </div>
                <div className="justify-center">
                  <Link href="/rubriche/procedure-torneo">
                    <a>
                      <h2 className="text-xl font-bold py-4 hover:underline text-orange-500">
                        Guide alle Procedure di Torneo
                      </h2>
                    </a>
                  </Link>
                  <p className="text-md">
                    Articoli pratici e dettagliati su tematiche dedicate al
                    mondo dell&apos;arbitraggio.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
              <Link href="/essere-judge">
                <a>
                  <h2 className="tracking-tight font-bold text-3xl hover:underline text-orange-500">
                    Essere Judge
                  </h2>
                </a>
              </Link>
              <p className="text-xl">
                Cosa vuol dire essere arbitro di Magic e come diventarlo.
              </p>
            </div>
          </section>

          {/* <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-3xl font-semibold tracking-wide uppercase">
                  Per gli arbitri
                </h2>

                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Risorse, articoli ed attività legate al mondo arbitrale.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <BookOpenIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        <Link href="/risorse">
                          <a>Documenti utili</a>
                        </Link>
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Regole ufficiali e altre risorse utili per gestire i tuoi
                      tornei
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <DocumentTextIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        <Link href="/articoli">
                          <a>Rubriche</a>
                        </Link>
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Approfondimenti su regole, meccaniche, gestione dei
                      tornei, e tutto quello di cui hai bisogno per rimanere
                      aggiornato
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <DocumentTextIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Lorem Ipsum
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Lorem ipsum
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <DocumentTextIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Lorem Ipsum
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Lorem ipsum
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-3xl font-semibold tracking-wide uppercase">
                  Per i giocatori
                </h2>

                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Risorse, articoli ed attività legate al mondo arbitrale.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <BookOpenIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        <Link href="/risorse">
                          <a>Documenti utili</a>
                        </Link>
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Regole ufficiali e altre risorse utili per gestire i tuoi
                      tornei
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <DocumentTextIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        <Link href="/articoli">
                          <a>Rubriche</a>
                        </Link>
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Approfondimenti su regole, meccaniche, gestione dei
                      tornei, e tutto quello di cui hai bisogno per rimanere
                      aggiornato
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <DocumentTextIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Lorem Ipsum
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Lorem ipsum
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <DocumentTextIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Lorem Ipsum
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Lorem ipsum
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};
