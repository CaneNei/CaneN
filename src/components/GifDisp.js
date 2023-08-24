import React from 'react'
import desktopimg from '../images/desktopimg.png'
import '../styles/GifDisp.css'
import {aboutme1, aboutme2, aboutme3} from '../ProjList/content.js';

function GifDisp() {
  return (
    <div id = 'Home'>
    <div className='gif'>
        <div><img src={desktopimg} alt='' className='image'/></div>
        <h1 className='text'>About Me</h1>
        <p className='text'>{aboutme1} </p><br></br>   
        <p className='text'>{aboutme2} </p><br></br>
        <p className='text'>{aboutme3} </p>
        <h1 className='text'>Skills</h1>

        <div className='icons'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt='' width='100px' height='100px'/>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg" alt='' width='100px' height='100px'/>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='' width='100px' height='100px'/>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='' width='100px' height='100px'/>  
          
          
        </div>
        
          
    </div>
    </div>
  )
}

export default GifDisp