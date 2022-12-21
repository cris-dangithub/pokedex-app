import React from 'react'
import Pokeball from './Pokeball'
import './styles.css/TitleInfo.css'

const TitleInfo = ({title}) => {
  return (
    <div className='c-title-info__title-container'>
      <h2 className='title-info__title'>{title}</h2>
      <div className='main-info-container__divider-name main-info-container__divider-name--title-info' />
      <Pokeball />
    </div>
  )
}

export default TitleInfo