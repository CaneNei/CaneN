import React from 'react'
import '../styles/ProjectDisp.css'
import ProjectCard from './ProjectCard.js'


function ProjectDisp() {
  return (
    <><div className='title' id='Projects'>My Projects</div><div>
      <ProjectCard/>     
    </div></>
  )
}

export default ProjectDisp