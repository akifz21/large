export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

export interface Blog {
  id: string;
  title: string;
  sections: string[];
  image: string;
  published: boolean;
  authorId: string;
  tags: string[];
  comments: Comment[];
  likes: string[];
  createdAt: string;
  updatedAt: string;
  searchable_text: string;
  author: User;
}

interface Comment {
  id: string;
  userId: string;
  blogId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface CommentRequest {
  userId: string;
  blogId: string;
  content: string;
}

interface Like {
  id: string;
  userId: string;
  blogId: string;
}
