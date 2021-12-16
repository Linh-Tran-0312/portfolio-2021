import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectModal from './ProjectModal';

const ProjectThumb = ({ project }) => {
    return (

        <div style={{ width: '100%', height: "350px" }} className="bg-white text-color rounded-0 thumb">
            <img src={project.img} style={{ height: '100%', width: "100%", objectFit: 'cover', borderRadius: 0, border: 0 }} className="thumb-img" />
            <div className="rounded-0 thumb-body">
                <div className="thumb-text">
                    {project.title}
                    <ProjectModal project={project} />
                </div>
            </div>
        </div>)
}

export default ProjectThumb;