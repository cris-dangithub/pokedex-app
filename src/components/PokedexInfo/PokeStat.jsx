import React from 'react'
import './styles.css/PokeStat.css'

const PokeStat = ({ stat }) => {

  const objStyleBar = {
    gridColumn: `span ${stat.base_stat}`
  }

  return (
    <li className='c-poke-stat'>
      <div className='poke-stat__text'>
        <h4 className={`poke-stat__name-stat ${stat.stat.name === 'hp' ? `poke-stat__name-stat--hp` : ''}`}>
          {stat.stat.name}
        </h4>
        <span className='poke-stat__number'>{stat.base_stat}/150</span>
      </div>
      <div className='poke-stat__graphic'>
        <div className="poke-stat__graphic-bar" style={objStyleBar}></div>
      </div>
    </li>
  )
}

export default PokeStat