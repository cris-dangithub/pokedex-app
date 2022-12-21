import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/SelectTypes.css'

const SelectTypes = ({ setTypeSelected }) => {
  const [titleSelectMenu, setTitleSelectMenu] = useState('All pokemons')

  const [types, setTypes] = useState() //!
  const getTypesOptions = () => { //!
    const URL = `https://pokeapi.co/api/v2/type`
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }
  const changeTypes = (url, typeName = 'All pokemons') => {
    setTypeSelected(url);
    setTitleSelectMenu(typeName)
  }
  useEffect(() => {
    getTypesOptions()
  }, [])

  const [menuShowed, setMenuShowed] = useState(false)

  const showOptions = () => {
    setMenuShowed(!menuShowed)
  }


  return (
    <div className='select-type' onClick={showOptions}>
      <div className={`select-type__selected ${menuShowed ? 'select-type--showed' : ''}`}>
        <span className=''>{titleSelectMenu}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <ul className={`select-type__list ${menuShowed ? 'select-type__list--show' : 'select-type__list--hidden'}`}>

            <li
              className={`select-type__options ${titleSelectMenu === 'All pokemons' ? 'select-type__options--active' : ''}`}
              onClick={() => changeTypes('All pokemons')}
            >
              All pokemons
            </li>

        
        {
          types?.map((option, indx) => (
            <li
              key={indx}
              className={`select-type__options ${titleSelectMenu === option.name ? 'select-type__options--active' : ''}`}
              onClick={() => changeTypes(option.url, option.name)}
            >
              {option.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SelectTypes