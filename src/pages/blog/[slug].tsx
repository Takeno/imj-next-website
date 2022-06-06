import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getAllPosts, getPostBySlug } from '../../utils/blog'
import markdownToHtml from '../../utils/markdown-to-html'
import BlogBody from '../../component/Blog/Body'

type Props = {
  post: PostType
  // morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.title) {
    return <ErrorPage statusCode={404} />
  }

  return (

            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <BlogBody post={post} />
            </article>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}