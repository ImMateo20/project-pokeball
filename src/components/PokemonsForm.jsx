import PokemonCard from "./PokemonCard"
import '../css/PokemonsForm.css'

function PokemonsForm({pokemones}) {
  return (
    <div className="contenedorPokemones">
        {pokemones.map(p => (
            <PokemonCard key={p.id} pokemon={p}/>
        ))}
    </div>
  )
}

export default PokemonsForm
