/* This example requires Tailwind CSS v2.0+ */
import {PropsWithChildren} from 'react';
import Footer from './Footer';
import Header from './Header';

type HomeLayoutProps = PropsWithChildren<{}>;

export default function HomeLayout({children}: HomeLayoutProps) {
  return (
    <main className="flex flex-col h-full">
      <div className="flex-1">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <Header />

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                {children}
              </main>
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
      </div>
      <Footer />
    </main>
  );
}
