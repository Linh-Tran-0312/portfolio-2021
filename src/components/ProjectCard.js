import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectModal from './ProjectModal';

const CardProject = ({ project }) => {
    return (
        <Col lg={4} md={6} sm={12} xs={12} className="my-2 d-flex justify-content-center">
            <ScrollAnimation offset={300} animateIn='zoomIn'
  animateOut='fadeOut'>
                <Card style={{ width: '300px' }} className="shadow border-0 my-2">
                    <Card.Img variant="top" src={project.img} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body className=" d-flex flex-column justify-content-between">
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
        </Col>
    )
}

export default CardProject;