import React from 'react'
import Card from 'react-bootstrap/Card'
import Balancer from 'react-wrap-balancer'
import Button from 'react-bootstrap/Button'
import '../styles/ProjectCard.css'
import {cardInfo} from '../ProjList/projectList.js'
import { Link, Navigate, useNavigate } from 'react-router-dom'

// const ProjectCard = () => {
//        const Render = (card, id) => {
//         return(
//             <div className='centered-card'>
//             <Card>
//                 {/* <Button variant="link" onClick={() => handleButtonClick(card)} className='transparent-button'> */}
//                 {/* <div onClick={() =>{Navigate('/project/'+id)}}> */}
//                 <Link to={'/project'}>
//                     <Card.Img variant="top" src = {card.image} key = {id} className='card-img'/>
//                 </Link>
                
//                 {/* </Button> */}
//                 <Card.Body className='card-body'>
//                     <Card.Title className='card-title'>{card.title}</Card.Title>
//                     <Card.Text> {card.text}</Card.Text>        
//                 </Card.Body>
//                 {/* </div> */}
//             </Card>
//             </div>
            
//         );
//     }

//   return <div className = 'grid'>{cardInfo.map(Render,)}</div>
function ProjectCard({image, title, text, id}){    
    const Navigate = useNavigate();

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

     return(
         <div className='centered-card'>
         <Card>
             {/* <Button variant="link" onClick={() => handleButtonClick(card)} className='transparent-button'> */}
             <div onClick={() =>{Navigate('/project/'+id); handleScrollToTop()}}>
             {/* <Link to={'/project'}> */}

                 <Card.Img variant="top" src = {image} className='card-img'/>
             {/* </Link> */}
             </div>
             {/* </Button> */}
             <Card.Body className='card-body'>
                 <Card.Title className='card-title'>{title}</Card.Title>
                 <Card.Text> {text}</Card.Text>        
             </Card.Body>
             {/* </div> */}
         </Card>
         </div>
         
     );
 }  


export default ProjectCard