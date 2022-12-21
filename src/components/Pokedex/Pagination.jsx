import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './styles/Pagination.css'

const Pagination = ({ pokemons, setPageContent, setCurrentPage, currentPage, currentBlock, setCurrentBlock }) => {

  const generateBlock = (initialArray, principalLimit, secondLimit) => {
    const result = initialArray.reduce((acc, el, index) => {
      if (index % (principalLimit * secondLimit) === 0 && index !== 0) {
        acc.push([[el]])
      } else if (index % secondLimit === 0 && index !== 0) {
        acc[acc.length - 1].push([el]);
      } else {
        acc[acc.length - 1][acc[acc.length - 1].length - 1].push(el);
      }
      return acc;
    },
      [[[]]]
    );
    return result;
  };

  const [pokemonsPaginationArray, setPokemonsPaginationArray] = useState()
  const { pokePerPage } = useSelector(state => state)
  const buttonsPerPagination = 5

  useEffect(() => {
    if (pokemons) {
      setPokemonsPaginationArray(generateBlock(pokemons, buttonsPerPagination, pokePerPage))
    }
    setCurrentBlock(0)
  }, [pokemons])
  useEffect(() => {
    if (pokemonsPaginationArray) {
      setPageContent(pokemonsPaginationArray[currentBlock][currentPage])
    }
  }, [pokemonsPaginationArray, currentPage])

  const handleBackButton = () => {
    const position = currentPage % buttonsPerPagination

    if (!(position === 0)) setCurrentPage(currentPage - 1)
    if (position === 0 && currentBlock !== 0) {
      setCurrentBlock(currentBlock - 1);
      setCurrentPage(buttonsPerPagination - 1)
    }
    // Cuando el bloque esté en cero, se regresa al último bloque
    if (position + currentBlock === 0) {
      setCurrentBlock(pokemonsPaginationArray.length - 1);
      setCurrentPage(pokemonsPaginationArray[pokemonsPaginationArray.length - 1].length - 1)
    }
  }
  const handleNextButton = () => {
    const position = currentPage % buttonsPerPagination

    if (!(position === buttonsPerPagination - 1)) setCurrentPage(currentPage + 1)
    if (position === buttonsPerPagination - 1) {
      setCurrentBlock(currentBlock + 1);
      setCurrentPage(0)
    }
    // Cuando el bloque esté en cero, se regresa al último bloque
    if (currentBlock === pokemonsPaginationArray.length - 1 && currentPage === pokemonsPaginationArray[currentBlock].length - 1) {
      setCurrentBlock(0);
      setCurrentPage(0)
    }
  }

  //console.log(pokemonsPaginationArray);
  return (
    <section className='c-pagination'>
      <button className='pagination__btn pagination__btn--arrows pagination__btn--active' onClick={handleBackButton}>
        <i className="fa-solid fa-angles-left"></i>
      </button>
      {
        pokemonsPaginationArray && pokemonsPaginationArray[currentBlock].map((el, index) => (
          <button
            className={`pagination__btn ${index === currentPage ? 'pagination__btn--active' : 'pagination__btn--no-active'}`}
            key={index} onClick={() => setCurrentPage(index)}
          >
            {(buttonsPerPagination * currentBlock) + index + 1}
          </button>
        ))
      }
      <button className='pagination__btn pagination__btn--arrows pagination__btn--active' onClick={handleNextButton}>
        <i className="fa-solid fa-angles-right"></i>
      </button>

    </section>
  )
}

export default Pagination