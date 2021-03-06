import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import placeholder from '../assets/not-found-placeholder.png';

const NotFoundPage: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>Pagina non trovata</title>
        <meta name="robots" content="follow noindex" />
      </Head>
      <div className="h-full flex-1 flex justify-center items-center flex-col px-4">
        <Image src={placeholder} alt="Page not found" aria-hidden="true" />

        <h1 className="text-4xl font-bold text-blue-dark mt-8">
          Ops, la pagina che cerchi non esiste.
        </h1>
        <p>O non è stata ancora scritta.</p>

        <p className="mt-4">
          Se pensi sia un errore, non esitare a{' '}
          <Link href="/contatti">
            <a className="underline">contattarci</a>
          </Link>{' '}
          per migliorare il servizio.
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
