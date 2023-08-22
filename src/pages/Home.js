import React from 'react'
import '../styles/App.css';
import GifDisp from '../components/GifDisp';
import ProjectDisp from '../components/ProjectDisp';

function Home() {
  return (
    <div>
      <a>Home</a>
      <div>
        <GifDisp />
        <ProjectDisp />
      </div>
    </div>
  )
  
}

export default Home