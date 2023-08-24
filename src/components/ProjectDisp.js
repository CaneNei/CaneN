import React from 'react'
import '../styles/ProjectDisp.css'
import ProjectCard from './ProjectCard.js'
import '../styles/ProjectCard.css'
import {cardInfo} from '../ProjList/projectList.js'

function ProjectDisp() {
  return (
    <><div className='title'>My Projects</div><div>
      <div className = 'grid'>{cardInfo.map((project ,idx) => {
        return <ProjectCard key={idx} id={idx} image={project.image} title={project.title} text={project.text.map((string, index) => (<li key={index} style={{textAlign: 'left', paddingLeft: '10px'}}>{string}</li>))}/>}
            )}      </div>       
    </div></>
  )
}

export default ProjectDisp