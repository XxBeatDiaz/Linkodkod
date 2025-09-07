export type PostType = {
  id?: number;
  img: string;
  description: string;
  authorName: string;
  timeStemp: string;
  children: React.ReactNode;
};
