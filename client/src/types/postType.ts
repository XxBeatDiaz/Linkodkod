export type PostType = {
  id: string | number;
  img: string;
  description: string;
  content: string;
  authorName: string;
  timeStemp: string;
  countLikes: number;
  countDisLikes: number;
  children: React.ReactNode;
};

export type Posts = PostType[] | undefined;