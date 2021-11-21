
import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Row, Col, Image, Card, Button, Form, ButtonGroup, Spinner } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardProject from './components/ProjectCard';
import BgAnimation from './components/BgAnimation';
import parse from 'html-react-parser';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from 'emailjs-com';
import './animate.css';
library.add(fab, fas);

const getData = async (path) => {

    let data = await fetch(path);
    return data.json();


}
const initMessage = {
    message : "",
    type: true
}
const logo = ["react.png", "nodejs.png", "docker.png", "csharp.png", "githubaction.png", "github.png", "typescript.png", "jest.png", "mui.png"]
const App = () => {
    const [data, setData] = useState("");
    const [eng, setEng] = useState(true);
    const [font, setFont] = useState("");
    const [ message, setMessage ] = useState(initMessage)
    const sectionRef = useRef([]);
    const form = useRef();

    useEffect(() => {
        (async () => {
            let temp = "";
            if (eng) {
                setFont("fontCaliReg")
                temp = await getData('portfolio_eng.json');
                if (data) {
                    setData(temp);
                } else {
                    setTimeout(() => { setData(temp) }, 2500)
                }

            } else {
                setFont("")
                temp = await getData('portfolio_vn.json');
                setData(temp);
            }
        })()

    }, [eng])

    const handleScroll = (value) => {
        sectionRef.current[value].scrollIntoView();
    }
    const handleChangeLanguage = (e) => {
        setEng(preState => !preState)
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setMessage({ message: data.message.success, type: true});
                setTimeout(() => {
                    setMessage({...message, message: ""})
                },10000)
            }, (error) => {
                setMessage({ message: data.message.error, type: false});
                setTimeout(() => {
                    setMessage({...message, message: ""})
                },10000)
                console.log(error.text);
            });

            form.current.reset();
    };
    if (!data) return (
        <Container className="fadeIn loading d-flex flex-column justify-content-center align-items-center">
            <h1>Welcome to my site</h1>
            <div className="loader"></div>
        </Container>
    )
    return (
        <div className={`page fadeIn  ${font}`}>
            <BgAnimation />

            <Navbar className=' border-bottom bg-white d-flex flex-row align-items-center' expand="md" sticky="top">
                <Container>
                    <Navbar.Brand href="#about" className="h5 fontCali pt-3">LINH TRAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto text-center h6 font-bold">
                            <Nav.Link href="#" onClick={() => handleScroll(0)}><strong>{data.nav.about}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(1)}><strong>{data.nav.projects}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(2)}><strong>{data.nav.skills}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(3)}><strong>{data.nav.experience}</strong></Nav.Link>
                            <Nav className="d-flex flex-row justify-content-center">
                                <Nav.Link target="_blank" href="https://github.com/Linh-Tran-0312" className="mx-2"><Icon icon={['fab', 'github']} size="lg" /></Nav.Link>
                                <Nav.Link target="_blank" href="https://www.linkedin.com/in/ch%C3%AD-linh-tr%E1%BA%A7n-a54928200/" className="mx-2"><Icon icon={['fab', 'linkedin']} size="lg" /></Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container ref={(ref) => { sectionRef.current[0] = ref }} className="d-flex scroll justify-content-center align-items-center container" style={{ minHeight: 'calc(100vh - 60px)' }} >
                <Row className="container bg-white p-5 mt-2" >
                    <Col xs={12} lg={5} sm={12} className="  slideInDown my-3 d-flex align-items-center justify-content-center">
                        <Image src="ava1.jpg" className="img-ava" />
                    </Col>
                    <Col xs={12} lg={7} sm={12} className="my-3">
                        <h3 className="fontCali">{data.about.greeting}</h3>
                        {parse(data.about.introduction)}
                    </Col>
                </Row>
            </Container >

            <Container ref={(ref) => { sectionRef.current[1] = ref }} fluid className='d-flex justify-content-center align-items-center scroll container text-center  my-5 bg-light'>
                <Row className="d-flex justify-content-center container bg-white py-5 px-4">
                    <Col xs={12} lg={3} md={4}>
                        <h5 className="sectionTitle">
                            <strong>
                                {data.nav.projects.toUpperCase()}
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} lg={9} md={8} className="d-flex justify-content-center container-fluid bg-white">
                        <Row className="d-flex justify-content-center container bg-white">
                            {
                                data.projects.map((project, index) => <CardProject key={index} project={project} />)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container ref={(ref) => { sectionRef.current[2] = ref }} id="skills" className="container d-flex justify-content-center align-items-center  text-center my-5 scroll">
                <Row className="d-flex justify-content-center container bg-white py-5 px-4">
                    <Col xs={12} lg={3} md={4} >
                        <h5 className="sectionTitle">
                            <strong>
                                {data.nav.skills.toUpperCase()}
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} lg={4} md={8} className="text-start ">
                        <h6 className="text-start">
                            <strong>{data.skills.technical.title.toUpperCase()}</strong>
                        </h6>
                        {parse(data.skills.technical.details)}
                        <h6 className="text-start">
                            <strong>  {data.skills.language.title.toUpperCase()}</strong>

                        </h6>
                        {parse(data.skills.language.details)}
                    </Col>
                    <Col lg={5} className="">
                        <Row >
                            {
                                logo.map(i => <Col key={i} xs={4} className="p-2 py-3">
                                    <ScrollAnimation offset={500} animateIn='zoomIn'
                                        animateOut='fadeOut'>
                                        <img alt="logo" src={i} className="logo" />
                                    </ScrollAnimation>

                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container ref={(ref) => { sectionRef.current[3] = ref }} className="container d-flex justify-content-center align-items-center scroll text-center my-5">
                <Row className="d-flex justify-content-center container bg-white py-5 px-4">
                    <Col xs={12} lg={3} md={4} >
                        <h5 className="sectionTitle my-2">
                            <strong>
                                {data.nav.experience.toUpperCase()}
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} lg={6} md={8} className="text-start ">
                        {
                            data.experience.reverse().map(e =>
                                <Row key={e.period}>
                                    <Col lg={3} sm={12}>
                                        <p className="">{e.period}</p>
                                    </Col>
                                    <Col lg={9} sm={12}>
                                        <h6 className=""><strong>{e.company}</strong></h6>
                                        <p className="">{e.position}</p>
                                    </Col>
                                </Row>)
                        }

                    </Col>
                    <Col lg={3} className="">
                        <ScrollAnimation offset={500} animateIn='bounceInRight'
                            animateOut='fadeOut'>
                            <img alt="logo" src="hcmus.png" className="hcmus" />
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>

            <Container className="container d-flex justify-content-center align-items-center  text-center my-5">
                <Row className="d-flex justify-content-center container bg-white py-5 px-4">
                    <Col xs={12} lg={3} md={4} >
                        <h5 className="sectionTitle">
                            <strong>
                                {data.nav.contact.toUpperCase()}
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} lg={9} md={8} className="text-start ">
                        {
                            data.contact.map(e =>
                                <Row key={e.period}>
                                    <Col lg={2} sm={12}>
                                        <p className="">{e.type}</p>
                                    </Col>
                                    <Col lg={10} sm={12}>
                                        <h6 className=""><strong>{e.details}</strong></h6>
                                    </Col>
                                </Row>)
                        }
                        <Row>
                            <Col lg={2} sm={12}>
                                <p className="">{eng ? "Message" : "Tin nhắn"}</p>
                            </Col>
                            <Col lg={10} sm={12}>
                                <Form ref={form} onSubmit={sendEmail}>
                                    <Row>
                                        <Col lg={6} sm={12}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>{eng ? "Subject" : "Tiêu đề"}</Form.Label>
                                                <Form.Control type="text" placeholder="" name="subject" required/>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} sm={12}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>{eng ? "Your Email" : "Email"}</Form.Label>
                                                <Form.Control type="email" placeholder="" name="email" required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} sm={12}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>{eng ? "Your Message" : "Nội dung"}</Form.Label>
                                                <Form.Control as="textarea" rows={3} name="message" required/>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className="d-flex justify-content-between">
                                            <p className={ message.type ? "text-success" : "text-danger"}>{message.message}</p>                                         
                                                <Button variant="secondary" type="submit">{eng ? "Submit" : "Gửi"}</Button>                                           
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <ButtonGroup className="language" vertical>
                <Button variant="outline-secondary" className="bg-light" onClick={() => handleScroll(0)}><Icon icon={['fas', 'chevron-up']} /></Button>
                <Button variant="outline-secondary" onClick={handleChangeLanguage} className="bg-light">{eng ? 'VIET' : 'ENG'}</Button>
            </ButtonGroup>
            <Container fluid className="bg-white border-top text-center py-3 ">
                <h3 className="fontCookie"> Thanks for visiting my site</h3>
                <h6 className=" font-bold">Created by Tran Chi Linh</h6>
            </Container>
        </div>
    )
}

export default App;