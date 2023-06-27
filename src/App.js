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
    <div className='row'>

      <div className='headdd' >

      <h1 className='heading'><span>The</span> Siren </h1>
      </div>

      <div className='navBar'>
        <NBar />
      </div>
    </div>
    <hr></hr>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<PageA />} />
        <Route path='/NPage/:id' element={<NPage />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App