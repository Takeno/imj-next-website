export default function BlogBody({post}:{post:PostType}) {
  return <><h1>{post.title}
  </h1>    <div className="max-w-2xl mx-auto">
        <div
          className={"prose"}
          dangerouslySetInnerHTML={{ __html: post.content }}
        /></div></>
}