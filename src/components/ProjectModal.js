import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from 'html-react-parser';
import React from 'react';
import { Button, Carousel, Container, Modal } from 'react-bootstrap';
import '../style.scss';

library.add(fab, fas);

function MyVerticallyCenteredModal(props) {

    return (

        <Modal
            {...props}
           
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen 

        >
            <Modal.Header closeButton className="bg-white text-color" >
                <Modal.Title id="contained-modal-title-vcenter" >
                    {props.detail.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white text-color">
                <Carousel interval={null} >
                    <Carousel.Item >
                        <iframe width="100%" className="iframe" src={props.detail.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Carousel.Item>
                    {
                        props.detail.images.map((src, index) =>
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100 img-carousel"
                                    src={src}
                                    alt="First slide"
                                  
                                />
                            </Carousel.Item>
                        )
                    }
                </Carousel>
                <Container className="my-3 px-4">
                    {parse(props.detail.description)}
                    <Container className="d-flex justify-content-start">
                    <Button variant="success" className="mx-2 rounded-0"><a href={props.detail.link.source}  target="_blank" rel="noreferrer" className="text-white text-decoration-none"><Icon icon={['fab', 'github-square']} size="lg" />&nbsp; Source </a></Button>
                    {
                        props.detail.link.be !== "" && <Button variant="primary" className="mx-2 rounded-0"><a href={props.detail.link.be} rel="noreferrer" target="_blank" className="text-white text-decoration-none"><Icon icon={['fas', 'server']} size="lg" />&nbsp; API </a></Button>

                    }
                        <Button variant="info" className="mx-2 rounded-0"><a href={props.detail.link.fe} rel="noreferrer" target="_blank" className="text-white text-decoration-none"><Icon icon={['fas', 'external-link-square-alt']} size="lg" />&nbsp; Demo</a></Button>

                    </Container>
                </Container>
                <hr/>
                <div className="text-center">
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Body>
        </Modal>

    );
}

const ProjectModal = ({ project }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="secondary" className="rounded-0" style={{ backgroundColor: "white", color: 'black', border: 'none' }} onClick={() => setModalShow(true)}>More Info
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                detail={project}
            />
        </>
    )
}
export default ProjectModal;
