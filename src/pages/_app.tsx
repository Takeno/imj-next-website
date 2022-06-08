import '../styles/globals.css';
import type {AppProps} from 'next/app';
import BaseLayout from '../components/Layout/BaseLayout';
import {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);

  /* @ts-expect-error} */
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
