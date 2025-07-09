'use client';
import { usePokemon } from '@/hooks/query/usePokemon';
import { useEffect, useRef } from 'react';

const PokemonList = () => {
  const {
    fetchPokemonsQuery: { data, fetchNextPage, hasNextPage, isPending, isError }
  } = usePokemon();

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {data.pages.map((page) => (
        <>
          {page.data.map(({ id, name, img_url }) => (
            <div key={id} className="flex flex-col items-center gap-2 border-4 border-gray-300 p-3">
              <img src={img_url} width={100} />
              <p>{name}</p>
            </div>
          ))}
        </>
      ))}
      <div ref={observerRef} />
    </div>
  );
};

export default PokemonList;
