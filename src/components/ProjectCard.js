import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectModal from './ProjectModal';

const CardProject = ({ project }) => {
    return (
        <Col lg={6} md={12} sm={12} xs={12} className="d-flex justify-content-center my-2">
            <ScrollAnimation offset={300} animateIn='zoomIn'
  animateOut='fadeOut'>
                <Card style={{ width: '100%' }} className="shadow border-0">
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