import Head from 'next/head';
import {
  getAllArticles,
  getAllCategories,
  getCategoryBySlug,
} from '../../../utils/contents';
import {PageTitle} from '../../../components/Typography';
import ArticleList from '../../../components/Articles/ArticleList';
import {GetStaticProps} from 'next';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
import MarkdownContent, {
  prepareMarkdownContent,
} from '../../../components/MarkdownContent';
import Link from 'next/link';

interface SerializedArticle extends Omit<Category, 'content'> {
  content: MDXRemoteSerializeResult;
}

type PageProps = {
  category: SerializedArticle;
  posts: Article[];
};

const Articoli = ({category, posts}: PageProps) => {
  return (
    <>
      <Head>
        <title>{category.title} | IMJ</title>
      </Head>

      <article className="mx-auto max-w-4xl px-4 md:px-0">
        <PageTitle>{category.title}</PageTitle>

        <MarkdownContent content={category.content} />

        {posts.length > 0 ? (
          <ArticleList articles={posts} />
        ) : (
          <div className="mt-10 text-2xl">
            Non ci sono ancora articoli nella sezione. Vuoi essere il primo?{' '}
            <br />
            <Link href="/contatti">
              <a className="underline">Contatta</a>
            </Link>{' '}
            la redazione!
          </div>
        )}
      </article>
    </>
  );
};

export default Articoli;

export const getStaticProps: GetStaticProps<
  PageProps,
  {category: string}
> = async ({params}) => {
  const category = getCategoryBySlug(params!.category);

  if (category === null) {
    return {
      notFound: true,
    };
  }

  const posts = getAllArticles()
    .filter((a) => a.category === category.slug)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const content = await prepareMarkdownContent(category.content || '');

  return {
    props: {
      category: {
        ...category,
        content,
      },
      posts,
    },
  };
};

export async function getStaticPaths() {
  const categories = getAllCategories();

  return {
    paths: categories.map((category) => {
      return {
        params: {
          category: category.slug,
        },
      };
    }),
    fallback: false,
  };
}
