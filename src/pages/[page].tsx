import Head from 'next/head';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import {
  getAllPages,
  getPageBySlug,
  prepareMarkdownContent,
} from '../utils/contents';
import {GetStaticProps} from 'next';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
import MarkdownContent from '../components/MarkdownContent';

interface SerializedPage extends Omit<Page, 'content'> {
  content: MDXRemoteSerializeResult;
}

type PageProps = {
  page: SerializedPage;
};

const Page = ({page}: PageProps) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>

      <article className="mx-auto max-w-2xl px-4 md:px-0">
        <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-2">
          {page.title}
        </h1>
        <p className="text-sm italic text-gray-700 mb-10">
          Ultimo aggiornamento{' '}
          <time>{format(parseISO(page.updatedAt), 'dd/MM/yyyy')}</time>
        </p>
        <MarkdownContent content={page.content} />
      </article>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<
  PageProps,
  {page: string}
> = async ({params}) => {
  const post = getPageBySlug(params!.page);

  if (post === null) {
    return {
      notFound: true,
    };
  }

  const content = await prepareMarkdownContent(post.content || '');

  return {
    props: {
      page: {
        ...post,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPages();

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
