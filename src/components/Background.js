import React from 'react'
import '../styles/components/_background.scss'
import Navbar from '../components/Navbar'
function Background({text,img,f}) {
  /* */
  return (
    <div className="background"  style={{backgroundImage: `url(${img})`}}>
        <Navbar f={f}/>
    <h1 className='text-7xl text-white font-bold mx-auto w-fit mt-36'>{text}</h1>
    </div>
  )
}

export default Background
