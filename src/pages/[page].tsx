import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import markdownToHtml from '../utils/markdown-to-html';
import BlogBody from '../components/Blog/Body';
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
    <article className="mb-32">
      <Head>
        <title>{post.title}</title>
        {/* <meta property="og:image" content={post.ogImage.url} /> */}
      </Head>
      <BlogBody post={post} />
    </article>
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
