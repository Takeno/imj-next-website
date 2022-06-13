/* This example requires Tailwind CSS v2.0+ */
import {PropsWithChildren} from 'react';
import Footer from './Footer';
import Header from './Header';

type BaseLayoutProps = PropsWithChildren<{}>;

export default function BaseLayout({children}: BaseLayoutProps) {
  return (
    <main className="flex flex-col h-full">
      <Header />
      <div className="w-full mt-4 flex-1">{children}</div>
      <Footer />
    </main>
  );
}
