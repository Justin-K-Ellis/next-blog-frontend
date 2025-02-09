interface Post {
  id: string;
  title: string;
  content: string;
  postedOn: string;
  isPublished: boolean;
  authorId: number;
  author: { username: string };
  _count: { comments: number };
  tags: Array<Tag>;
}

interface Tag {
  id: number;
  name: string;
}

export type { Post, Tag };
