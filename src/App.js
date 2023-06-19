import React from 'react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import NBar from './NBar'
import NPage from './NPage'
import PageA from './PageA'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <h1 className='head'><span className='siran'>The</span>  <span >Siren </span> </h1>

      <div className='navBar'>
        <NBar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<PageA />} />
        <Route path='/NPage/:id' element={<NPage />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App