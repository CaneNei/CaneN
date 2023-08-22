import React from 'react'
import Card from 'react-bootstrap/Card'
import Balancer from 'react-wrap-balancer'
import Button from 'react-bootstrap/Button'
import '../styles/ProjectCard.css'
import bitsvssig from '../images/bitsvssigma.png'
import drones from '../images/drones.png'
import futures from '../images/futures.png'

const ProjectCard = () => {
    const cardInfo = [
        {image: bitsvssig, title: 'Bits Vs Sigma', text: 'gfdgdfgdfgdf'},
        {image: drones, title: '', text: 'ffddddddddddddddddddddddd'},
        {image: futures, title: '', text: 'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'},
        {image: bitsvssig, title: '', text: 'fffffffffffffffffffffffff'},
    ];

    const Render = (card, index) => {
        return(
            <div className='centered-card'>
            <Card>
                <Button variant="link" onClick={() => handleButtonClick(card)} className='transparent-button'>
                    <Card.Img variant="top" src = {card.image} key = {index} className='card-img'/>
                </Button>
                <Card.Body className='card-body'>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text> {card.text}</Card.Text>        
                </Card.Body>
            </Card>
            </div>
        );
    }
    
    const handleButtonClick = (card) => {
        // Handle button click logic for the specific card here
    };

  return <div className = 'grid'>{cardInfo.map(Render)}</div>
  
}

export default ProjectCard