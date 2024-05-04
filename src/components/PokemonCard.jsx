import '../css/PokemonCard.css'

function PokemonCard({ pokemon }) {


    return (
        <div key={pokemon.id} className='cardPokemon'>
            <img className="imgPokemon" src={pokemon.sprites.other.dream_world.front_default} alt="" />
            <div className='datosPokemon'>
                <p>{pokemon.name.toUpperCase()}</p>
                <p>#{pokemon.id}</p>
                <div className='tiposPokemon'>
                    {
                        pokemon.types.map((t, index) => (
                            <p key={index} className='tipoPokemon' style={{ backgroundColor: `var(--color-${t.type.name})` }}>{t.type.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PokemonCard