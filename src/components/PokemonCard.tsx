interface PokemonCardProps {
    name: string,
    image?: string,
}


function PokemonCard({ name, image }: PokemonCardProps) {
    return (
        <figure>
            {image ? (
                <img src={image} alt={name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>
                <p>{name}</p>
            </figcaption>
        </figure>
    );
}

export default PokemonCard;