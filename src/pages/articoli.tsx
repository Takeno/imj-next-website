import Head from 'next/head';
import {getAllArticles} from '../utils/contents';
import {PageTitle} from '../components/Typography';
import ArticleList from '../components/Articles/ArticleList';

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

        <p className="my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
          felis ante. Maecenas sem arcu, maximus nec tincidunt quis, gravida ut
          odio. Suspendisse convallis leo non purus venenatis, at sollicitudin
          quam faucibus. Nunc hendrerit tincidunt risus, sit amet bibendum orci.
          Vivamus pharetra congue ornare. Cras auctor nunc sed velit sagittis
          tempor. Vivamus aliquet purus et sem tristique, sed accumsan quam
          tristique.
        </p>

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
