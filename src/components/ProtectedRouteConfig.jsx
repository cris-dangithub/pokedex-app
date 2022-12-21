import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './shared/Header'

const ProtectedRouteConfig = () => {
  const { configOpen } = useSelector(state => state)
  if (configOpen) {
    return (
      <>
        <Header />
        <Outlet />
      </>)
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRouteConfig