export interface ArticleModel {
  id: number;
  title: string;
  content: string;
  condensed_date: string;
  author: string;
  image: string;
  publicationDate: Date;
  tags: string[];
  comments: CommentModel[];
}

interface CommentModel {
  id: number;
  text: string;
  author: string;
  createdAt: Date;
}
