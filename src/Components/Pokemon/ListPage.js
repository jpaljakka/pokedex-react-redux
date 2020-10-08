import React from 'react'
import Card from './Card'
import Pagination from '../Layout/Pagination'
import { connect } from "react-redux";
import { fetchPokemon } from '../../store/actions/pokeActions/index'
import { fetchData } from '../../services/'


const ListPage = (pokemon) => {
    console.log(pokemon)

    return (
        <div>

        </div>
    );
}



const mapStateToProps = ({ poke }) => ({
    pokemon: poke.pokemon
})


export default connect(mapStateToProps)(ListPage);