import PokemonList from '@/components/pokemon/PokemonList';

const PokemonPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-title text-center">POKEMON</p>
      <PokemonList />
    </div>
  );
};

export default PokemonPage;
