import { combineReducers } from 'redux'


import pokeReducer from './pokeReducers';

const rootReducers = combineReducers({
    poke: pokeReducer
});

export default rootReducers;