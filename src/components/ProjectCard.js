import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectModal from './ProjectModal';

const CardProject = ({ project }) => {
    return (
        <Col lg={5} md={12} sm={12} xs={12} className="d-flex justify-content-center my-2">
           
            <ScrollAnimation offset={300} animateIn='zoomIn'
  animateOut='fadeOut' style={{width: "80%",height: "400px", display: "flex",justifyContent: "center" }}>
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
          
        </Col>
    )
}

export default CardProject;