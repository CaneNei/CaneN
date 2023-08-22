import React from 'react'
import desktopimg from '../images/desktopimg.png'
import '../styles/GifDisp.css'

function GifDisp() {
  return (
    <div className='gif' id='Home'>
        <div><img src={desktopimg} alt='' className='image'/></div>
        <h1 className='text'>About Me</h1>
        <p className='text'> My Name is Cane Neilson and I'm a Programmer.fffffffff'm a Programmer.fffffffffffffffffffffffffffffffff'm a Programmer.fffffffffffffffffffffffffffffffff'm a Programmer.fffffffffffffffffffffffffffffffff'm a Programmer.ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>        
        <h1 className='text'>Skills</h1>

        <div className='icons'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width='100px' height='100px'/>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg" width='100px' height='100px'/>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" width='100px' height='100px'/>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width='100px' height='100px'/>  
          
          
        </div>
        
          
    </div>
  )
}

export default GifDisp