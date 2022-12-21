import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './shared/Header'

const ProtectedRoutes = () => {
  const { trainer } = useSelector(state => state)

  if (trainer) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  } else {
    return <Navigate to='/' />
  }



}

export default ProtectedRoutes