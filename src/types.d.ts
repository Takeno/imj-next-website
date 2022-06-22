interface Category {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

interface Judge {
  firstName: string;
  lastName: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  bio: string;
}

interface Article {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  category: Category['slug'];
  author: Judge['nickname'];
  abstract: string;
  content: string;
}

interface Page {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

type ManaType = 'W' | 'U' | 'B' | 'R' | 'G' | 'C' | 'X';
