import React from 'react'

const TypeInformation = ({ type, idx, array }) => {
  return (
    <>
      {
        (array.length > 1 && (idx !== array.length - 1)) ?
          <>
            <li className='list-type__type'>{type.type.name}</li>
            <li>{'/'}</li>
          </>
          :
          <li className='list-type__type' key={type.type.url}>{type.type.name}</li>
      }

    </>
  )
}

export default TypeInformation