import Head from 'next/head';
import {getAllArticles} from '../utils/contents';
import {PageTitle} from '../components/Typography';
import ArticleList from '../components/Articles/ArticleList';
import Link from 'next/link';

type Props = {
  posts: Article[];
};

const Articoli = ({posts}: Props) => {
  return (
    <>
      <Head>
        <title>Tutti gli articoli su IMJ</title>
      </Head>

      <article className="mx-auto max-w-4xl px-4 md:px-0">
        <PageTitle>Tutti gli articoli</PageTitle>

        <p className="mt-10 mb-4">
          Tutti gli articoli del sito, prodotti dalla nostra redazione e dalla
          community.
        </p>

        <p>Puoi anche sfogliarle per categorie:</p>

        <ul className="flex flex-col md:flex-row justify-between">
          <li>
            <Link href="/rubriche/carta-del-mese">
              <a className="underline font-bold">Carta del Mese</a>
            </Link>
          </li>

          <li>
            <Link href="/rubriche/procedure-torneo">
              <a className="underline font-bold">
                Guide alle Procedure di Torneo
              </a>
            </Link>
          </li>

          <li>
            <Link href="/rubriche/report-torneo">
              <a className="underline font-bold">Report di Torneo</a>
            </Link>
          </li>

          <li>
            <Link href="/rubriche/blast-from-the-past">
              <a className="underline font-bold">Blast from the Past</a>
            </Link>
          </li>
        </ul>

        <ArticleList articles={posts} />
      </article>
    </>
  );
};

export default Articoli;

export async function getStaticProps() {
  const posts = getAllArticles();

  return {
    props: {
      posts: posts.sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    },
  };
}
