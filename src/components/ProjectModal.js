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
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton className="bg-white text-color" >
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.detail.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white text-color">
                <Carousel interval={null} >
                    <Carousel.Item >
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/ffcitRgiNDs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Carousel.Item>
                    {
                        props.detail.images.map((src, index) =>
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={src}
                                    alt="First slide"
                                    className="img-carousel"
                                />
                            </Carousel.Item>

                        )
                    }

                </Carousel>
                <Container className="my-3 px-4">
                    {parse(props.detail.description)}
                    <Container className="d-flex justify-content-center">
                        <Button variant="info" className="mx-2 text-white"><Icon icon={['fas', 'external-link-square-alt']} size="lg" />&nbsp; Demo</Button>

                        <Button variant="success" className="mx-2"><Icon icon={['fab', 'github-square']} size="lg" />&nbsp; Source </Button>
                    </Container>
                </Container>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center bg-white">
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}

const ProjectModal = ({ project }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="secondary" className="pointer" style={{ backgroundColor: "#e7e7e7", color: 'black', border: 'none' }} onClick={() => setModalShow(true)}>
                View Details
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
