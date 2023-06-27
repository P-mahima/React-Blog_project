import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import download from './images/download.jpg'
import images from './images/images.png'

function NPage() {
  const Nav = useNavigate();
  const Location = useLocation().state
  return (

    <div className='Link'>

      <div className='avtaarflex'>

      <div className='avtaar1'>  
        <div>        
          <img className='avtaar' src={images}></img>
        </div>
        <div className='namedate'>
          <div className='nameN'>Mahima</div>
          <div className='date'>
            <div>June 27 2023</div>
            <div>10 min read</div>
          </div>
        </div>
      </div>

        <div>
          <div>
          <img className='avtaar2' src={download}></img>
          </div>

        </div>


      </div>





      <img className='middleI' src={Location.urlToImage} alt=""></img>
      <h1 className='newsheading'>
        {Location.title}
      </h1>
      <p className='containt'>
        {Location.content}
      </p>
      <p >{Location.publishedAt}</p>
      <button
        onClick={() => {
          Nav(-1);
        }}
        className="BacktoHome"
      >
        ⬅️Come to Home
      </button>


    </div>
  )
}

export default NPage;