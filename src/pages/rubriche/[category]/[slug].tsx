import Head from 'next/head';
import {useEffect} from 'react';
import ReactTooltip from 'react-tooltip';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import {GetStaticProps} from 'next';
import {
  getAllArticles,
  getArticleBySlug,
  getJudgeByNickname,
} from '../../../utils/contents';
import MarkdownContent, {
  prepareMarkdownContent,
} from '../../../components/MarkdownContent';
import {PageTitle} from '../../../components/Typography';
import {labelFor} from '../../../utils/id-to-labels';
import Link from 'next/link';

interface SerializedArticle extends Omit<Article, 'content'> {
  content: MDXRemoteSerializeResult;
}

type PageProps = {
  post: SerializedArticle;
  author: Judge;
};

const Post = ({post, author}: PageProps) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.abstract} />
      </Head>

      <div className="w-full px-4 md:px-0 flex flex-col md:flex-row-reverse">
        <article className="mx-auto max-w-2xl md:px-10">
          <PageTitle>{post.title}</PageTitle>
          <p className="text-sm italic text-gray-700 mb-10 -mt-8">
            Scritto il{' '}
            <time>{format(parseISO(post.createdAt), 'dd/MM/yyyy')}</time>
          </p>

          <MarkdownContent content={post.content} />
        </article>

        <aside className="border-t pt-5 mt-5 md:w-[400px] md:border-r md:border-t-0 md:px-10 md:mt-0 md:pt-10 md:sticky md:top-0 md:h-screen">
          <h3 className="font-bold text-lg">Rubrica</h3>
          <p>
            <Link href={`/rubriche/${post.category}`}>
              <a className="hover:underline">{labelFor(post.category)}</a>
            </Link>
          </p>
          <h3 className="font-bold text-lg pt-5">Autore</h3>
          <p>
            {author.firstName} {author.lastName}
          </p>

          {author.bio && (
            <>
              <h3 className="font-bold text-lg pt-5">Biopic</h3>
              <p>{author.bio}</p>
            </>
          )}

          {/* <h3 className="font-bold text-lg pt-5">Revisore</h3>
          <p>Aruna il Bizantino</p> */}
        </aside>
      </div>
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

  const author = getJudgeByNickname(post.author);

  if (author === null) {
    throw new Error('Judge not found for article: ' + post.slug);
  }

  const content = await prepareMarkdownContent(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
      author,
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
          category: post.category,
        },
      };
    }),
    fallback: false,
  };
}
