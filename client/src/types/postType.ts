export type PostType = {
  id?: number;
  img: string;
  description: string;
  authorName: string;
  timeStemp: string;
  children: React.ReactNode;
};

export type Posts = {
  posts: PostType[];
};