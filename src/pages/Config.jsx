import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectPokesPerPage from '../components/Config/SelectPokesPerPage'
import { darkMode, lightMode } from '../store/slices/darkmode.slice'
import { setPokePerPageGlobal } from '../store/slices/pokePerPage.slice'
import './styles/Config.css'

const Config = () => {
  const rootReact = document.querySelector('#root')
  const { darkmode, pokePerPage } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleClickDarkMode = () => {
    darkmode ? dispatch(darkMode()) : dispatch(lightMode())
    rootReact.classList.toggle('u-dark-mode')
  }

  const availableOptions = [4, 8, 12, 16, 20]
  const handlePokePerPages = (option) => {
    dispatch(setPokePerPageGlobal(option))
    
  }


  return (
    <article className='c-config'>
      <section className='config-card'>
        <h1 className='config-card__title'>Configure options</h1>
        <ul className='config-card__list'>
          <li className='config-card__item'>
            <span className='config-card__title-option'>Darkmode</span>
            <div className='config-card__switch' onClick={handleClickDarkMode}>
              <div className={`config-card__switch-btn ${darkmode ? 'config-card__switch-btn--active' : ''}`}></div>
            </div>
          </li>
          <li className='config-card__item'>
            <span className='config-card__title-option'>Pokemons per page</span>
            <SelectPokesPerPage
              availableOptions={availableOptions}
              handlePokePerPages={handlePokePerPages}
              pokePerPage={pokePerPage}
            />
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Config