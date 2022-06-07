import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export default function BlogBody({post}: {post: PostType}) {
  return (
    <>
      <h1>{post.title}</h1>

      <p>Articolo del {format(parseISO(post.createdAt), 'dd/MM/yyyy')}</p>
      <div className="max-w-2xl mx-auto">
        <div
          className={'prose'}
          dangerouslySetInnerHTML={{__html: post.content}}
        />
      </div>
    </>
  );
}
