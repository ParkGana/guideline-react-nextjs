import type { PokemonInfiniteQueryType } from '../types/pokemonType';
import api from './api';

/* Pokemon 목록 가져오기 */
export const fetchPokemonsAPI = async ({ pageParam = 1 }): Promise<PokemonInfiniteQueryType> => {
  try {
    const res = await api.get('/pokemons', { _page: pageParam, _per_page: 10 });
    return {
      data: res.data,
      nextPage: res.next
    };
  } catch (e: any) {
    throw new Error(e.message ?? 'Network error occurred!');
  }
};
