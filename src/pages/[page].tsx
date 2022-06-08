import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import markdownToHtml from '../utils/markdown-to-html';
import {getAllPages, getPageBySlug} from '../utils/pages';

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
        <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-2">
          {post.title}
        </h1>
        <p className="text-sm italic text-gray-700 mb-10">
          Ultimo aggiornamento{' '}
          <time>{format(parseISO(post.updatedAt), 'dd/MM/yyyy')}</time>
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
  };
};

export async function getStaticProps({params}: Params) {
  const post = getPageBySlug(params.page, [
    'slug',
    'title',
    'createdAt',
    'updatedAt',
    'content',
  ]);

  if (post === null) {
    return {
      notFound: true,
    };
  }

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
  const posts = getAllPages(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          page: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
