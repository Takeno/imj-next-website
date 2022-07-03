import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Link from 'next/link';
import {labelFor} from '../../utils/id-to-labels';

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({articles}: ArticleListProps) {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="my-10 border-t pt-10">
          <Link href={`/rubriche/${article.category}/${article.slug}`}>
            <a>
              <h3 className="text-2xl font-bold hover:underline">
                {article.title}
              </h3>
            </a>
          </Link>
          <p className="text-sm italic text-gray-700 my-2">
            Pubblicato il{' '}
            <time>{format(parseISO(article.createdAt), 'dd/MM/yyyy')}</time>{' '}
            nella rubrica{' '}
            <Link href={`/rubriche/${article.category}`}>
              <a className="underline">{labelFor(article.category)}</a>
            </Link>
            , a cura di {labelFor(article.author)}.
          </p>

          <p>{article.abstract}</p>
        </div>
      ))}
    </>
  );
}
