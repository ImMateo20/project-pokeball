import { useState, useEffect } from 'react'
import { getPokemones } from './data/pokemon'
import PokemonCategory from './components/PokemonCategory'
import PokemonsForm from './components/PokemonsForm'
import './css/App.css'

export function App() {
  const [allPokemones, setAllPokemones] = useState([])
  const [pokemones, setPokemones] = useState([])
  const [fondoColor,setFondoColor] = useState('Todos')

  useEffect(() => {
    getPokemones()
      .then(data => {
        setPokemones(data)
        setAllPokemones(data)
      })
      .catch(err => {
        console.error('Error pokemones', err)
      })
  }, [])

  function ordenarTipo(tipo) {
    setFondoColor(tipo)
    if (tipo == 'Todos') {
      setPokemones(allPokemones)
    } else {
      const AuxPok = allPokemones.filter(pokemon => {
        return pokemon.types.some(t => t.type.name === tipo);
      })
      setPokemones(AuxPok);
    }
  }


  return (<div className='contenedor-panel' style={{background: `linear-gradient(320deg,rgb(0, 0, 0), var(--color-${fondoColor}),rgb(255, 255, 255))`}}>
    <PokemonCategory ordenarTipo={ordenarTipo} />
    <PokemonsForm pokemones={pokemones} />
  </div>
  )
}