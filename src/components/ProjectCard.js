import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectModal from './ProjectModal';

const CardProject = ({ project }) => {
    return (
     
           
            <ScrollAnimation offset={300} animateIn='zoomIn' duration={1}
  animateOut='flipOutY' style={{width: "100%",height: "350px", display: "flex",justifyContent: "center" }}>
                <Card style={{ width: '100%', height: "100%" }}  className="box-shadow border-1 border-light bg-white text-color rounded-0">
                    <Card.Img variant="top" src={project.img} style={{ height: '220px', width: "100%", objectFit: 'cover', borderRadius: 0, border: 0 }} />
                    <Card.Body className=" d-flex flex-column justify-content-between rounded-0">
                        <div>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text className="text-start">
                                {project.summary}
                            </Card.Text>
                        </div>
                        <div className="mt-4">
                            <ProjectModal project={project} />
                        </div>
                    </Card.Body>
                </Card>
            </ScrollAnimation>
 
    )
}

export default CardProject;