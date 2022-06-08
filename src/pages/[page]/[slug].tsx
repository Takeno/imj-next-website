import Head from 'next/head';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';

import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {GetStaticProps} from 'next';
import {
  getAllArticles,
  getArticleBySlug,
  prepareMarkdownContent,
} from '../../utils/contents';
import MarkdownContent from '../../components/MarkdownContent';

interface SerializedArticle extends Omit<Article, 'content'> {
  content: MDXRemoteSerializeResult;
}

type PageProps = {
  post: SerializedArticle;
};

const Post = ({post}: PageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 md:text-5xl mb-2">
          {post.title}
        </h1>
        <p className="text-sm italic text-gray-700 mb-10">
          Scritto il{' '}
          <time>{format(parseISO(post.createdAt), 'dd/MM/yyyy')}</time>
        </p>

        <MarkdownContent content={post.content} />
      </article>
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<
  PageProps,
  {slug: string}
> = async ({params}) => {
  const post = getArticleBySlug(params!.slug);

  if (post === null) {
    return {
      notFound: true,
    };
  }

  const content = await prepareMarkdownContent(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllArticles();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
          page: post.category,
        },
      };
    }),
    fallback: false,
  };
}
