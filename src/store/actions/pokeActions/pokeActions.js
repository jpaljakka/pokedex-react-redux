import * as actions from '../pokeActions/actionTypes'


export const fetchPokeStart = () => ({
    type: actions.POKE_START
});

export const fetchPokeSuccess = pokemon => ({
    type: actions.POKE_SUCCESS,
    payload: pokemon
});

export const fetchPokeFail = error => ({
    type: actions.POKE_FAIL,
    payload: error
});




export function fetchPokemon() {
    return async dispatch => {
        dispatch(fetchPokeStart());
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
            if (!res) {
                throw new Error(res.error)
            }
            const data = await res.json();
            dispatch(fetchPokeSuccess(data.results));
            return data.results
        }
        catch (error) {
            dispatch(fetchPokeFail(error))
        }
    };
}

