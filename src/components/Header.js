import React from 'react'
import desktopimg from '../images/desktopimg.png'
import { useLocation } from 'react-router-dom'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {  
  const location = useLocation();

  const getHashLink = (sectionId) => {
    if (location.pathname.startsWith('/project')) {
      return `/#${sectionId}`; // Redirect to home page with hash
    } else {
      return `#${sectionId}`; // Same-page navigation
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='Header'>      
        <Link to='/' onClick={handleScrollToTop}>
          <a className='Hov'> Cane Neilson</a>
        </Link>
        <a className='Hov' href={getHashLink('Home')}> About</a>
        <a className='Hov' href={getHashLink('Projects')}><img src={desktopimg} className='img' alt=''/> Projects</a>
        <a className='Hov' href={getHashLink('Resume')}><img src={desktopimg} className='img' alt=''/> Resume</a>        
    </div>    
  )
}


export default Header

// import React from 'react';
// import desktopimg from '../images/desktopimg.png';
// import { Link, useHistory } from 'react-router-dom';
// import '../styles/Header.css';

// const Header = ({ handleAnchorLinkClick }) => {
//   console.log('hi');
//   return (
    
//     <div className='Header'>
//       <Link to='/#Projects'>
//         <a className='Hov'> Cane Neilson</a>
//       </Link>
//       <a className='Hov' onClick={() => handleAnchorLinkClick('Home')}>
//         About
//       </a>
//       <a className='Hov' onClick={() => handleAnchorLinkClick('Projects')}>
//         <img src={desktopimg} className='img' alt='' /> Projects
//       </a>
//       <a className='Hov' onClick={() => handleAnchorLinkClick('Resume')}>
//         <img src={desktopimg} className='img' alt='' /> Resume
//       </a>
//     </div>
//   );
// };

// export default Header;