import '../css/PokemonCategory.css'

function PokemonCategory({ordenarTipo}) {
    return (
        <div className="header">
            <ul className='listaTipos'>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-Todos)' }}>Todos</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-grass)' }}>grass</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-poison)' }}>poison</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-fire)' }}>fire</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-flying)' }}>flying</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-water)' }}>water</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-bug)' }}>bug</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-normal)' }}>normal</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-electric)' }}>electric</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-ground)' }}>ground</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-fairy)' }}>fairy</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-fighting)' }}>fighting</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-psychic)' }}>psychic</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-rock)' }}>rock</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-steel)' }}>steel</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-ice)' }}>ice</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        ordenarTipo(e.target.textContent)
                    }} style={{ backgroundColor: 'var(--color-ghost)' }}>ghost</button>
                </li>
            </ul>
        </div>
    )
}

export default PokemonCategory