import { useState} from 'react'
import { ApiPokemon } from './apiPokemon';
import "./index.css"




function Search() {
const [nombrePokemon , SetnombrePokemon] = useState("");
const [datosPokemon , SetdatosPokemon]  = useState("");
const Search = (event) =>{
  SetnombrePokemon(event.target.value)
}

const pokemonDatos = {
  img:datosPokemon.sprites.other.home.front_default,
  nombre: datosPokemon.name,
  numero: datosPokemon.id,

}

const onClick = async (event) =>{
  const data = await ApiPokemon(nombrePokemon)
  SetdatosPokemon(data)
}



  return (
        <>
        <section className='contenedoruno' >
        <div >
          <input type="text" onChange={Search} placeholder='Coloca Un Pokemon' />
        </div>
        <div>
          <button onClick={onClick}>buscar Pokemon</button>
        </div>
        </section>
        
        <section className='contenedordos'>
          <div className='contenedorPokemon'>
          <img className='imgPokemon' src={pokemonDatos.img}  />
            <h1 className='DatosPokemon'>nombre : {pokemonDatos.nombre}</h1>
            <p >numero Pokedex : {pokemonDatos.numero}</p>
          </div>
        </section>
        </>
  )
}

export default Search
