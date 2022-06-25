import Head from 'next/head';
import {useEffect} from 'react';
import ReactTooltip from 'react-tooltip';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import {getAllPages, getPageBySlug} from '../utils/contents';
import {GetStaticProps} from 'next';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
import MarkdownContent, {
  prepareMarkdownContent,
} from '../components/MarkdownContent';
import {PageTitle} from 'components/Typography';

interface SerializedPage extends Omit<Page, 'content'> {
  content: MDXRemoteSerializeResult;
}

type PageProps = {
  page: SerializedPage;
};

const Page = ({page}: PageProps) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>

      <article className="mx-auto max-w-4xl px-4 md:px-0">
        <PageTitle>{page.title}</PageTitle>

        <MarkdownContent content={page.content} />
        <p className="text-sm italic text-gray-700 mt-10">
          Ultimo aggiornamento{' '}
          <time>{format(parseISO(page.updatedAt), 'dd/MM/yyyy')}</time>
        </p>
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
