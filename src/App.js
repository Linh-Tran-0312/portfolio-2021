
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import parse from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, ButtonGroup, Col, Container, Form, Image, Nav, Navbar, Row } from 'react-bootstrap';
import './animate.css';
import BgAnimation from './components/BgAnimation';
import CardProject from './components/ProjectCard';
import './style.css';
import { useInView } from "react-intersection-observer";
library.add(fab, fas);

const getData = async (path) => {
    let data = await fetch(path);
    return data.json();
}
const handleTime = () => {
    const now = new Date();
    const hour = now.getHours()
    if(hour > 16 || hour < 5 ) return true;
    return false
}
const initMessage = {
    message : "",
    type: true
}
const logo = ["react.png", "nodejs.png", "docker.png", "csharp.png", "githubaction.png", "github.png", "typescript.png", "jest.png", "mui.png"]
const initSection = {
    about: false,
    projects: false,
    skills: false,
    experience: false
}
const initSec = [false,false,false,false];
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
const App = () => {
    const [data, setData] = useState("");
    const [eng, setEng] = useState(true);
    const [font, setFont] = useState("");
    const [ night, setNight] = useState(handleTime());
    const [ message, setMessage ] = useState(initMessage);
    const [ aboutRef, aboutInView ] = useInView({ threshold: 0.7 });
    const [ projectRef, projectInView ] = useInView({ threshold: 0.5 });
    const [ skillRef, skillInView ] = useInView({ threshold: 0.8 });
    const [ experienceRef, experienceInView ] = useInView({ threshold: 0.8 });
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
    const handleChangeTime = (e) => {
        setNight(!night);
    }
    const handleScroll = (value) => {   
        const section = parseInt(value);
        document.getElementById(section).scrollIntoView({behavior: "smooth"})        
    }
    const handleInView = e => {
         
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
            <h1 className="fontCookie fontLg">Welcome to my site</h1>
            <div className="loader"></div>
        </Container>
    )
    return (
        <div className={`page fadeIn  ${font}`} onScroll={handleInView}>
            <BgAnimation night={night} />
            <Navbar className=' border-bottom bg-white d-flex flex-row align-items-center' expand="md" style={{zIndex: 800}} sticky="top">
                <Container>
                    <Navbar.Brand href="/" className="h5 fontCali pt-3">LINH TRAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto text-center h6 font-bold">
                            <Nav.Link href="#" onClick={() => handleScroll(0)} className="d-flex flex-column justify-content-center align-items-center"><strong className={aboutInView ? "activeSection" : "hover-underline-animation"}>{data.nav.about}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(1)}className="d-flex flex-column justify-content-center align-items-center"><strong className={projectInView? "activeSection" : "hover-underline-animation"}>{data.nav.projects}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(2)} className="d-flex flex-column justify-content-center align-items-center"><strong className={skillInView ? "activeSection" : "hover-underline-animation"}>{data.nav.skills}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(3)} className="d-flex flex-column justify-content-center align-items-center"><strong className={experienceInView ? "activeSection" : "hover-underline-animation"}>{data.nav.experience}</strong></Nav.Link>
                            <Nav className="d-flex flex-row justify-content-center align-items-start">
                                <Nav.Link target="_blank" href="https://github.com/Linh-Tran-0312" className="mx-2"><Icon icon={['fab', 'github']} size="lg" /></Nav.Link>
                                <Nav.Link target="_blank" href="https://www.linkedin.com/in/ch%C3%AD-linh-tr%E1%BA%A7n-a54928200/" className="mx-2"><Icon icon={['fab', 'linkedin']} size="lg" /></Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container ref={aboutRef}  id="0" className="d-flex scroll justify-content-center align-items-center container" style={{ minHeight: 'calc(100vh - 60px)' }} >
                <Row className="container bg-white p-5 mt-2" >
                    <Col xs={12} lg={5} sm={12} className="  slideInDown my-3 d-flex align-items-center justify-content-center">
                        <div className="img-ava-container">
                        <Image src="ava3.jpg" className="img-ava" />
                        </div>
                    </Col>
                    <Col xs={12} lg={7} sm={12} className="my-3">
                        <h3 className="fontCali">{data.about.greeting}</h3>
                        {parse(data.about.introduction)}
                    </Col>
                </Row>
            </Container >

            <Container ref={projectRef}  id="1" fluid className='d-flex justify-content-center align-items-center scroll container text-center  my-5'>
                <Row className="d-flex justify-content-center  container bg-white py-5">
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

            <Container ref={skillRef}   id="2" className="container d-flex justify-content-center align-items-center  text-center my-5 scroll">
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

            <Container ref={experienceRef}  id="3" className="container d-flex justify-content-center align-items-center scroll text-center my-5">
                <Row className="d-flex justify-content-center container bg-white py-5 px-4">
                    <Col xs={12} lg={3} md={4} >
                        <h5 className="sectionTitle my-2">
                            <strong>
                                {data.nav.experience.toUpperCase()}
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} lg={5} md={8} className="text-start ">
                        {
                            data.experience.reverse().map((e,index) =>
                                <Row key={index}>
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
                    <Col lg={4} className="d-flex justify-content-center align-items-start">
                        <ScrollAnimation offset={500} animateIn='zoomIn'
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
                            data.contact.map((e,index) =>
                                <Row key={index}>
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
                <Button  variant="outline-secondary" className="arrButton" onClick={() => handleScroll(0)}><Icon icon={['fas', 'angle-double-up']} /></Button>
                <Button variant="outline-secondary" className="lanButton" onClick={handleChangeLanguage}  >{eng ? 'VIET' : 'ENG'}</Button>
            </ButtonGroup>
            <Container fluid className="bg-white border-top text-center pt-3 pb-2 ">
                <h3 className="fontCookie"> Thanks for visiting my site </h3>
                <h6 className=" font-bold">Created by Tran Chi Linh | <span className="change-bg"  onClick={handleChangeTime}><Icon icon={["fas","star-and-crescent"]} size="sm" className="moon" /> Change background</span></h6>
            </Container>
        </div> 
    )
}

export default App;