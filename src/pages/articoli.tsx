import Head from 'next/head';
import {getAllPosts} from '../utils/blog';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Link from 'next/link';

type Props = {
  posts: PostType[];
  // morePosts: PostType[]
  preview?: boolean;
};

const Articoli = ({posts, preview}: Props) => {
  return (
    <>
      <Head>
        <title>Tutti gli articoli su IMJ</title>
      </Head>

      <article className="mx-auto max-w-2xl">
        <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-10">
          Tutti gli articoli
        </h1>

        <ul className="list-disc">
          {posts.map((post, index) => (
            <li key={index}>
              <Link href={`/${post.category}/${post.slug}`}>
                <a>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </a>
              </Link>
              <time>{format(parseISO(post.createdAt), 'dd/MM/yyyy')}</time>
              <br />
              Categoria: {post.category}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Articoli;

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'slug',
    'category',
    'author',
    'createdAt',
  ]);

  return {
    props: {
      posts,
    },
  };
}