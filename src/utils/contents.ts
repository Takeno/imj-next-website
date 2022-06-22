import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import {object, string, SchemaOf} from 'yup';
import {serialize} from 'next-mdx-remote/serialize';

const pagesDirectory = join(process.cwd(), 'content/pages');
const categoriesDirectory = join(process.cwd(), 'content/categories');
const judgesDirectory = join(process.cwd(), 'content/judges');
const articlesDirectory = join(process.cwd(), 'content/articles');

const pageSchema: SchemaOf<Page> = object({
  title: string().required(),
  slug: string().required(),
  createdAt: string().required(),
  updatedAt: string().required(),
  content: string().required(),
});

const categorySchema: SchemaOf<Category> = object({
  title: string().required(),
  slug: string().required(),
  createdAt: string().required(),
  updatedAt: string().required(),
  content: string().required(),
});

const judgesSchema: SchemaOf<Judge> = object({
  firstName: string().required(),
  lastName: string().required(),
  nickname: string().required(),
  createdAt: string().required(),
  updatedAt: string().required(),
  bio: string().required(),
});

const articleSchema: SchemaOf<Article> = object({
  title: string().required(),
  slug: string().required(),
  createdAt: string().required(),
  updatedAt: string().required(),
  content: string().required(),
  category: string().required(),
  author: string().required(),
  abstract: string().required(),
});

export function getAllPages(): Page[] {
  const slugs = fs.readdirSync(pagesDirectory);

  return slugs
    .map((slug) => getPageBySlug(slug))
    .filter((p): p is Page => p !== null);
}

export function getPageBySlug(slug: string): Page | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(pagesDirectory, `${realSlug}.md`);

  if (fs.existsSync(fullPath) === false) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const {data, content} = matter(fileContents);

  const page = pageSchema.validateSync({
    ...data,
    slug: realSlug,
    createdAt: data.createdAt?.toISOString(),
    updatedAt: data.updatedAt?.toISOString(),
    content,
  });

  return page;
}

export function getAllArticles(): Article[] {
  const slugs = fs.readdirSync(articlesDirectory);

  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((p): p is Article => p !== null);
}

export function getArticleBySlug(slug: string): Article | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(articlesDirectory, `${realSlug}.md`);

  if (fs.existsSync(fullPath) === false) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const {data, content} = matter(fileContents);

  const article = articleSchema.validateSync({
    ...data,
    slug: realSlug,
    createdAt: data.createdAt?.toISOString(),
    updatedAt: data.updatedAt?.toISOString(),
    content,
  });

  return article;
}

export function getAllCategories(): Category[] {
  const slugs = fs.readdirSync(categoriesDirectory);

  return slugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((p): p is Category => p !== null);
}

export function getCategoryBySlug(slug: string): Category | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(categoriesDirectory, `${realSlug}.md`);

  if (fs.existsSync(fullPath) === false) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const {data, content} = matter(fileContents);

  const category = categorySchema.validateSync({
    ...data,
    slug: realSlug,
    createdAt: data.createdAt?.toISOString(),
    updatedAt: data.updatedAt?.toISOString(),
    content,
  });

  return category;
}

export function getAllJudges(): Judge[] {
  const slugs = fs.readdirSync(judgesDirectory);

  return slugs
    .map((slug) => getJudgeByNickname(slug))
    .filter((p): p is Judge => p !== null);
}

export function getJudgeByNickname(slug: string): Judge | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(judgesDirectory, `${realSlug}.md`);

  if (fs.existsSync(fullPath) === false) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const {data, content} = matter(fileContents);

  const judge = judgesSchema.validateSync({
    ...data,
    createdAt: data.createdAt?.toISOString(),
    updatedAt: data.updatedAt?.toISOString(),
  });

  return judge;
}
