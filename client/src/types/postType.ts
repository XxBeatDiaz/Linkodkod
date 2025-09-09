export type PostType = {
  id?: number;
  img: string;
  description: string;
  authorName: string;
  timeStemp: string;
  countLikes: number;
  countDisLikes: number;
  children: React.ReactNode;
};

export type Posts = PostType[] | undefined;