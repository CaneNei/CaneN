import React from 'react'
import { useParams } from 'react-router-dom'
import {cardInfo} from '../ProjList/projectList';
import { Link } from 'react-router-dom';
import '../styles/ProjectInfo.css'
import { hover } from '@testing-library/user-event/dist/hover';

function Projects() {
  const {id} = useParams();
  const project = cardInfo[id];
  return (
    <div className='moreInfo' style={{ whiteSpace: 'pre' }}>      
      <img src={project.gif} className='imageproj'/>      
      <h1 className='textbox'>{project.title}</h1>
      <p className='hashtag'>{project.hashtags}</p>
      <p className='textbox'>{project.info}</p> 
      <Link to={project.link} className='LinkIcon' target='_blank'>
        <i class="devicon-github-original" style={{fontSize:80}}></i> <br></br>    
      </Link>         
    </div>
  )
}

export default Projects
