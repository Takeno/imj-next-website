import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import {getAllPosts, getPostBySlug} from '../../utils/blog';
import markdownToHtml from '../../utils/markdown-to-html';
import BlogBody from '../../components/Blog/Body';

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
