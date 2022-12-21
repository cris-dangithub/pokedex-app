import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormInputButton from '../components/FormInputButton'
import Pagination from '../components/Pokedex/Pagination'
import PokeCard from '../components/Pokedex/PokeCard'
import SelectTypes from '../components/Pokedex/SelectTypes'
import './styles/Pokedex.css'

const Pokedex = () => {
  const { trainer } = useSelector(state => state)

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All pokemons')
  const [pageContent, setPageContent] = useState()
  const [currentPage, setCurrentPage] = useState(0)
  const [currentBlock, setCurrentBlock] = useState()

  const navigate = useNavigate()

  const getAllPokemons = () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=50000`
    axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }

  const getPokemonByType = typeSelected => {
    axios.get(typeSelected)
      .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
      .catch(err => console.log(err))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const input = e.target.search.value.trim().toLowerCase();
    navigate(`/pokedex/${input}`)
  }



  useEffect(() => {
    if (typeSelected !== "All pokemons") {
      getPokemonByType(typeSelected)
    } else {
      getAllPokemons()
    }
    setCurrentPage(0)
  }, [typeSelected])

  /* Correccion select */
  


  return (
    <article className='c-pokedex'>
      <header className='pokedex__header'>
        <h2 className='pokedex__greeting'>
          Welcome {trainer}! <span className='pokedex__instruction'>Here you can find your favorite pokemon.</span>
        </h2>
        <section className="pokedex-filters">
          <FormInputButton
            handleSubmit={handleSubmit}
            id='search'
            placeholder='Search Pokemon...'
            textButton='Search'
            modifiers='form--font-sizes-pokedex'
          />

          <SelectTypes
            setTypeSelected={setTypeSelected}
          />
        </section>

      </header>
      <Pagination
        pokemons={pokemons}
        setPageContent={setPageContent}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />
      <div className="poke-container">
        {
          pageContent?.map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
      <Pagination
        pokemons={pokemons}
        setPageContent={setPageContent}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />
    </article>
  )
}

export default Pokedex