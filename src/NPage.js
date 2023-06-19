import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function NPage() {
  const Nav = useNavigate();
  const Loc = useLocation().state
  return (

    <div className='Link'>
      <img style={{ width: "350px", height: "300px" ,marginTop:"10px "}} src={Loc.urlToImage} alt=""></img>
      <h1 className='newsheading'>
        {Loc.title}
      </h1>
      <p className='containt'>
        {Loc.content}
      </p>
      <p >{Loc.publishedAt}</p>
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