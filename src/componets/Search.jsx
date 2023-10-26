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
                        <div>
                        <img className='imgPokemon' src={pokemonDatos.img}  />
                        </div>
                        <div className='DatosPokemon'>
                        <h1 className='nombrePokemon'>{pokemonDatos.nombre}</h1>
                                <p >N Pokedex : {pokemonDatos.numero}</p>
                                
                        </div>
                         
                    </div>
              </section>
        </>
  )
}

export default Search
