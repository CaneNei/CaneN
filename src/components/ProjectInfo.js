import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../styles/ProjectCard.css'

function ProjectInfo(image, title, info) {
    return(
        <div className='centered-card'>
        <Card>
            {/* <Button variant="link" onClick={() => handleButtonClick(card)} className='transparent-button'> */}
            
            {/* <Link to={'/project'}> */}

                <Card.Img variant="top" src = {image} className='card-img'/>
            {/* </Link> */}
            
            {/* </Button> */}
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{title}</Card.Title>
                <Card.Text> {info}</Card.Text>        
            </Card.Body>
            {/* </div> */}
        </Card>
        </div>
        
    );
}

export default ProjectInfo