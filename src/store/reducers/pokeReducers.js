import * as actions from '../actions/pokeActions/actionTypes'

const initialState = {
    error: null,
    loading: false,
    pokemon: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.POKE_START:
            return { ...state, loading: true };
        case actions.POKE_SUCCESS:
            return { ...state, error: false, loading: false, pokemon: action.payload };
        case actions.POKE_FAIL:
            return { ...state, error: action.payload, };
        default:
            return state
    }
}