import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import {getAllPosts, getPostBySlug} from '../../utils/blog';
import markdownToHtml from '../../utils/markdown-to-html';

type Props = {
  post: PostType;
  // morePosts: PostType[]
  preview?: boolean;
};

const Post = ({post, preview}: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        {/* <meta property="og:image" content={post.ogImage.url} /> */}
      </Head>
      <article className="mx-auto max-w-2xl">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 md:text-5xl mb-2">
          {post.title}
        </h1>
        <p className="text-sm italic text-gray-700 mb-10">
          Scritto il{' '}
          <time>{format(parseISO(post.createdAt), 'dd/MM/yyyy')}</time>
        </p>
        <div
          className={'prose'}
          dangerouslySetInnerHTML={{__html: post.content}}
        />
      </article>
    </>
  );
};

export default Post;

type Params = {
  params: {
    page: string;
    slug: string;
  };
};

export async function getStaticProps({params}: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'createdAt',
    'slug',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'category']);

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
