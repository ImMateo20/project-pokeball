const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const pokemon = (i) => {
    return new Promise((resolve, reject) => {
        fetch(URL + i)
            .then(Response => Response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}


export function getPokemones() {
    const promises = []
    for (let i = 1; i < 100; i++) {
        promises.push(pokemon(i))
    }

    return Promise.all(promises)
    .then(data => data)
    .catch(error => {
        console.error('Error fetching pokemons', error)
        return []
    })
}