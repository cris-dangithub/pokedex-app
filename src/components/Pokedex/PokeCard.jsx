import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import colorTypes from '/src/json/colorTypes.json'
import TypeInformation from './TypeInformation'
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {
  const generateGradient = string => {
    const firstSeparate = string.split("%");
    const value = firstSeparate[firstSeparate.length - 2].slice(2);
    const newTopValue = `, ${Number(value) - 20}`;
    const newBottomValue = `, ${Number(value) + 10}`;
    const topHsl = [...firstSeparate];
    const bottomHsl = [...firstSeparate];
    topHsl.splice(firstSeparate.length - 2, 1, newTopValue);
    bottomHsl.splice(firstSeparate.length - 2, 1, newBottomValue);
    setGradients([topHsl.join("%"), bottomHsl.join("%")])
  };

  const [pokemon, setPokemon] = useState()
  const [gradients, setGradients] = useState()

  const getPokemon = () => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPokemon()
  }, [])
  useEffect(() => {
    if (pokemon) generateGradient(colorTypes[pokemon.types[0].type.name])
  }, [pokemon])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }


  const objStyleCard = {
    border: `10px solid ${colorTypes[pokemon?.types[0].type.name]}`
  }
  const objStyleCard__name = {
    color: `${colorTypes[pokemon?.types[0].type.name]}`,
    filter: 'brightness(0.8)'
  }
  const objStyleBackground__gradient = {
    backgroundImage: `linear-gradient(${gradients?.[0]}, ${colorTypes[pokemon?.types[0].type.name]}, ${gradients?.[1]})`,
  }

  return (
    <article onClick={handleClick} className='c-card' style={objStyleCard}>
      <div className="background">
        <div className="background__gradient" style={objStyleBackground__gradient}></div>
        <div className="background-simple"></div>
      </div>
      <header className='card__header' >
        <img className='card__principal-image' src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
        <section>
          <h3 className='card__name' style={objStyleCard__name}>{pokemon?.name}</h3>
          <ul className='list-type' >
            {
              pokemon?.types.map((type, idx, array) => (
                <TypeInformation
                  key={type.type.url}
                  type={type}
                  idx={idx}
                  array={array}
                />
              ))
            }
          </ul>
          <span className='card__titleType'>Type</span>
        </section>
      </header>
      <div className="card__divider"></div>
      <footer className='card__footer' >
        <ul className='list-stats'>
          {
            pokemon?.stats.map(stat => (
              <li className='list-stats__item' key={stat.stat.name}>
                <span className='list-stats__name-stat'>{stat.stat.name}</span>
                <span className='list-stats__number-stat' style={objStyleCard__name}>{stat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokeCard