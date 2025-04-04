import { useState } from "react";
import './App.css'

import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    image: "",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <PokemonCard name={pokemon.name} image={pokemon.image} />

      <button type="button" onClick={() => setPokemonName("bulbasaur")}>
        Click bulbasaur
      </button>

      <button type="button" onClick={() => setPokemonName("mew")}>
        Click mew
      </button>


    </div>
  );
}



// function App() {
//   return (
//     <>
//       <PokemonCard name="bulbasaur"
//         image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
//       {/* <PokemonCard name="mew" /> */}
//     </>
//   )
// }

// const pokemonList = [
//   {
//     name: "bulbasaur",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//   },
//   {
//     name: "mew",
//   },
// ];

// function App() {
//   return (
//     <div>
//       <PokemonCard pokemon={pokemonList[0]} />

//     </div>
//   );
// }

export default App;