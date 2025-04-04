import './App.css'
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <>
      <PokemonCard name="bulbasaur"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      {/* <PokemonCard name="mew" /> */}
    </>
  )
}

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