import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ItemList} from "./ItemList/ItemList.jsx";

export const ItemListConteiner = () => {
    const p = useParams()
    const [listPokemon, setListPokemon] = useState

    useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')           
      .then(res => res.json())
      .then(data => console.log(data));

        //setListPokemon(res)

    },[])
    
  return (
    <ItemList pokemons={listPokemon}/>
  )
}
