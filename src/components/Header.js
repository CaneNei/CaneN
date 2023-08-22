import React from 'react'
import desktopimg from '../images/desktopimg.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <a className='Hov' href='#Home'> Cane Neilson</a>
        <a className='Hov' href='#Projects'><img src={desktopimg} className='img' alt=''/> Projects</a>
        <a className='Hov' href='#Resume'><img src={desktopimg} className='img' alt=''/> Resume</a>        
    </div>
  )
}

export default Header