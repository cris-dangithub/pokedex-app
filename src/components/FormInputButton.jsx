import React, { useEffect } from 'react'
import './styles/FormInputButton.css'

const FormInputButton = ({ handleSubmit, id, placeholder, textButton, modifiers = '', value = '', modifierMainContainer = '' }) => {

  return (
    <form onSubmit={handleSubmit} className={`c-form ${modifierMainContainer}`}>
      <input type="text" id={id} className={`form__input ${modifiers}`} placeholder={placeholder} defaultValue={value} />
      <button className={`form__btn ${modifiers}`}>{textButton}</button>
    </form>
  )
}

export default FormInputButton