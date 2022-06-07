import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pagesDirectory = join(process.cwd(), 'content/pages')

export function getPageSlugs() {
  return fs.readdirSync(pagesDirectory)
}

export function getPageBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(pagesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPages(fields: string[] = []) {
  const slugs = getPageSlugs()
  const posts = slugs
    .map((slug) => getPageBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}