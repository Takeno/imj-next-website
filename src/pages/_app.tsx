import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';
import ReactTooltip from 'react-tooltip';

import BaseLayout from '../components/Layout/BaseLayout';

import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);

  return (
    <>
      {/* @ts-expect-error} */}
      {getLayout(<Component {...pageProps} />)}
      {/* @ts-expect-error} */}
      <ReactTooltip />
    </>
  );
}

export default MyApp;
