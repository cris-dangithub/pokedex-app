import React, { useEffect, useState } from 'react'
import PokeStat from './PokeStat'
import './styles.css/PokeCardMainInfo.css'
import TitleInfo from './TitleInfo'
import colorTypes from '/src/json/colorTypes.json'

const PokeCardMainInfo = ({ pokemon }) => {
  const generateGradient = string => {
    const firstSeparate = string.split("%");
    const value = firstSeparate[firstSeparate.length - 2].slice(2);
    const newTopValue = `, ${Number(value) - 20}`;
    const newBottomValue = `, ${Number(value) + 10}`;
    const topHsl = [...firstSeparate];
    const bottomHsl = [...firstSeparate];
    topHsl.splice(firstSeparate.length - 2, 1, newTopValue);
    bottomHsl.splice(firstSeparate.length - 2, 1, newBottomValue);
    return [topHsl.join("%"), bottomHsl.join("%")]
  };

  const gradientTypes = (indx) => (
    {
      backgroundColor: `${colorTypes[pokemon?.types[indx].type.name]}`,
    }
  )


  const [pokeBodyPhysic, setPokeBodyPhysic] = useState()
  const [gradients, setGradients] = useState()

  useEffect(() => {
    if (pokemon) {
      setPokeBodyPhysic([{ name: ['weight', pokemon.weight] }, { name: ['height', pokemon.height] }])
      setGradients(generateGradient(colorTypes[pokemon.types[0].type.name]))
    }
    console.log("entra");
  }, [pokemon])

  const objStyleCard__name = {
    color: `${colorTypes[pokemon?.types[0].type.name]}`,
    filter: 'brightness(0.8)'
  }
  const objStyleBackground__gradient = {
    backgroundImage: `linear-gradient(${gradients?.[0]}, ${colorTypes[pokemon?.types[0].type.name]}, ${gradients?.[1]})`,
  }

  return (
    <article className='c-main-info-container'>
      <div className="main-info-container__background" style={objStyleBackground__gradient}> {/* Aca va ele stilo dinamico */}
        <img className='main-info-container__background--image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </div>
      <header className='main-info-container__header'>
        <div className='main-info-container__name-pokemon'>
          <div className='main-info-container__divider-name' />
          <h1 className='main-info-container__name' style={objStyleCard__name}>{pokemon?.name}</h1>
          <div className='main-info-container__divider-name' />
        </div>
        <ul className='list-poke-body'>
          {
            pokeBodyPhysic?.map((physic, inx) => (
              <li key={inx} className='list-poke-body__item'>
                <span className='list-poke-body__title'>{physic.name[0]}</span>
                <span className='list-poke-body__number'>{physic.name[1]}</span>
              </li>
            ))
          }
        </ul>
      </header>
      <section className='basic-description'>
        <aside className='basic-description__types'>
          <h3 className='basic-description__title'>Type</h3>
          <ul className='basic-description__list'>
            {
              pokemon?.types.map((type, indx) => (
                <li className='basic-description__item basic-description__item--types' style={gradientTypes(indx)}
                  key={type.type.url}
                >
                  {type.type.name}
                </li>
              ))
            }
          </ul>
        </aside>
        <aside className='basic-description__types'>
          <h3 className='basic-description__title'>Abilities</h3>
          <ul className='basic-description__list'>
            {
              pokemon?.abilities.map(ability => (
                <li className='basic-description__item basic-description__item--abilities'
                  key={ability.ability.name}
                >
                  {ability.ability.name}
                </li>
              ))
            }
          </ul>
        </aside>
      </section>
      <footer className='stat-info'>
        <TitleInfo
          title='Stats'
        />
        <ul className='stat-info__stats-container'>
          {
            pokemon?.stats.map(stat => (
              <PokeStat
                key={stat.stat.name}
                stat={stat}
              />
            ))
          }
        </ul>
      </footer>
    </article >
  )
}

export default PokeCardMainInfo