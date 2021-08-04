import React from 'react';
import { Button, Modal, Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import parse from 'html-react-parser';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);

function MyVerticallyCenteredModal(props) {
    
    return (
        <Modal
             {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   {props.project.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel  >
                    {
                        props.project.images.map((src, index) => 
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={src}
                            alt="First slide"
                           className="img-carousel"
                        />
                        <Carousel.Caption>
       
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                        )
                    }
                
                </Carousel>
                <Container className="my-3 px-4">
                    {parse(props.project.description)}
                    <Container className="d-flex justify-content-center">
                        <Button variant="info" className="mx-2 text-white"><Icon icon={['fas','external-link-square-alt']}  size="lg" />&nbsp; Demo</Button>
                      
                        <Button variant="success" className="mx-2"><Icon icon={['fab', 'github-square']} size="lg" />&nbsp; Source </Button>
                    </Container>
                </Container>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const ProjectModal = ({ project}) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="secondary" style={{backgroundColor: "#e7e7e7", color: 'black', border: 'none'}} onClick={() => setModalShow(true)}>
                View Details
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                project={project}
            />
        </>
    )
}
export default ProjectModal;
