export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type PostInfiniteQueryType = {
  data: PostType[];
  nextPage: number | null;
};
