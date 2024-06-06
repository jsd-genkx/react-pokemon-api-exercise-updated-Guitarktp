import { useEffect, useState } from "react";

const PokemonBasicFetch = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {const response = await fetch(
         "https://pokeapi.co/api/v2/pokemon?limit=10"
      )

      if (!response.ok) {
        throw new Error('Response was not ok')
      }

      //throw new ต้องมีเพื่อ ...
      const data = await response.json();

      setPokemonData(data.results)
      }catch (error) {
        setError(error.message);
      }finally {
        setLoading(false)
      }


      




        // handle data

    // invoke function
    }

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="font-bold">Pokémon List</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonBasicFetch;
