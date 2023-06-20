import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

const NBar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <>

      <header>
        <div className="container ">
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>

              <li className='listC'><Link to="/">Home</Link></li>
              <li className='listC'><Link to="/bollywood">Bollywood</Link> </li>
              <li className='listC'><Link to="/technology">Technology</Link> </li>
              <li className='listC'><Link to="/hollywood">Hollywood</Link></li>
              <li className='listC'> <Link to="/fitness">Fitness</Link> </li>
              <li className='listC'> <Link to="/food">Food</Link></li>


            </ul>

            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>

    </>
  )
}

export default NBar;