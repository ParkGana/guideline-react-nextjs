import { fetchPokemonsAPI } from '@/lib/Pokemon';
import { useInfiniteQuery } from '@tanstack/react-query';

export const usePokemon = () => {
  /* Pokemon 목록 가져오기 */
  const fetchPokemonsQuery = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemonsAPI,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  return { fetchPokemonsQuery };
};
