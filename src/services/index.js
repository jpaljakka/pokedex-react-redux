

export const getPokemon = () => {

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
        .then(res => res)
        .catch(error => {
            return error
        })
};

export const fetchData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
    const data = await response.json()
    console.log(data)
}