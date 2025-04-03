const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        alt: "Bulbasaur"
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[1];
    return (
        <figure>
            <figcaption>
                <p>{pokemon.name}</p>
                {pokemon.imgSrc ? (
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                ) : (
                    <p>???</p>
                )}


            </figcaption>
        </figure>
    );
}

export default PokemonCard;