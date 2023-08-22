import React from 'react'
import desktopimg from '../images/desktopimg.png'
import '../styles/GifDisp.css'

function GifDisp() {
  return (
    <div className='gif' id='Home'>
        <div><img src={desktopimg} alt='' className='image'/></div>
        <h1 className='text'>About Me</h1>
        <p className='text'> My Name is Cane Neilson and I'm a Programmer.</p>
    </div>
  )
}

export default GifDisp