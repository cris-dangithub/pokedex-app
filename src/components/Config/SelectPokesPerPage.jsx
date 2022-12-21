import React, { useState } from 'react'

const SelectPokesPerPage = ({availableOptions, handlePokePerPages, pokePerPage}) => {
  const [menuShowed, setMenuShowed] = useState(false)

  const showOptions = () => {
    setMenuShowed(!menuShowed)
  }
  return (
    <div className='select-type' onClick={showOptions}>
      <div className={`select-type__selected select-type__selected--config ${menuShowed ? 'select-type--showed' : ''}`}>
        <span className=''>{pokePerPage} Pokemons</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <ul className={`select-type__list select-type__list--config ${menuShowed ? 'select-type__list--show' : 'select-type__list--hidden'}`}>
        {
          availableOptions.map((option, indx) => (
            <li
              key={indx}
              className={`select-type__options ${pokePerPage === option ? 'select-type__options--active' : ''}`}
              onClick={() => handlePokePerPages(option)}
            >
              {option} Pokemons
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SelectPokesPerPage