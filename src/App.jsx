import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRouteConfig from './components/ProtectedRouteConfig'
import ProtectedRoutes from './components/ProtectedRoutes'
import Config from './pages/Config'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexInfo from './pages/PokedexInfo'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />

        {/* {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexInfo />} />
        </Route>
        <Route element={<ProtectedRouteConfig />}>
          <Route path='/config' element={<Config />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
