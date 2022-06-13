import {ReactElement} from 'react';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import Link from 'next/link';
import {BookOpenIcon, DocumentTextIcon} from '@heroicons/react/outline';

export default function Home() {
  return (
    <>
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
                src="https://assets.moxfield.net/cards/card-Yeg42-art_crop.webp"
                alt="Balance"
              />
            </div>
          </div>

          <div className="py-12 bg-white">
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
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};
