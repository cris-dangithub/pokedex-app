import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { configClosed, configOpened } from '../../store/slices/configOpen.slice'
import './styles/Header.css'

const Header = () => {
  const navigate = useNavigate()
  const { trainer, configOpen } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleConfig = () => {
    if (!configOpen) {
      navigate('config')
      dispatch(configOpened())
    }
    if (configOpen) {
      trainer ? navigate('/pokedex') : navigate('/')
      dispatch(configClosed())

    }
  }
  return (
    <div className='c-header'>
      <img src="img/Home/pokedex.png" alt="Pokedex" className='header__title' />
      <div className="red-container">
      </div>
      <div className="black-container">
        <div className="header__circle">
          <div className="header__inner-circle">
            <div className="header__config" onClick={handleConfig}>
              {
                configOpen ?
                  <i className="fa-solid fa-xmark header__icon-config"></i>
                  :
                  <i className="fa-solid fa-gear header__icon-config"></i>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header