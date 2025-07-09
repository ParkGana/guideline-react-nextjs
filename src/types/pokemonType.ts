export type PokemonType = {
  id: number;
  name: string;
  img_url: string;
};

export type PokemonInfiniteQueryType = {
  data: PokemonType[];
  nextPage: number | null;
};
