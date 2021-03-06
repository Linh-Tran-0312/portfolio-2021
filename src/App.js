
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
import { useInView } from "react-intersection-observer";
import Typewriter from 'typewriter-effect';
import './animate.css';
import BgAnimation from './components/BgAnimation';
import ProjectThumb from './components/Thumbnail';
import './style.scss';
library.add(fab, fas);

const getData = async (path) => {
    let data = await fetch(path);
    return data.json();
}
const handleTime = () => {
    const now = new Date();
    const hour = now.getHours()
    if (hour > 16 || hour < 5) return true;
    return false
}
const handleGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour > 5 && hour < 12) return "Good Morning !";
    if (hour > 5 && hour < 17) return "Good Afternoon !";
    else {
        return "Good Evening !"
    }
}
const initMessage = {
    message: "",
    type: true
}
const logo = ["react.png", "nodejs.png", "docker.png", "csharp.png", "redux.png", "github1.png", "typescript.png", "jest.png", "mui.png"]

const App = () => {
    const [data, setData] = useState("");
    const [eng, setEng] = useState(true);
    const [font, setFont] = useState("");
    const [night, setNight] = useState(handleTime());
    const [message, setMessage] = useState(initMessage);
    const [aboutRef, aboutInView] = useInView({ threshold: 0.7 });
    const [skillRef, skillInView] = useInView({ threshold: 0.8 });
    const [projectRef, projectInView] = useInView({ threshold: 0.5 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.8 });
    const greeting = handleGreeting()
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
    useEffect(() => {
        if (!night) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    }, [night])
    const handleScroll = (value) => {
        const section = parseInt(value);
        document.getElementById(section).scrollIntoView({ behavior: "smooth" })

    }

    const handleChangeLanguage = (e) => {
        setEng(preState => !preState)
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setMessage({ message: data.message.success, type: true });
                setTimeout(() => {
                    setMessage({ ...message, message: "" })
                }, 10000)
            }, (error) => {
                setMessage({ message: data.message.error, type: false });
                setTimeout(() => {
                    setMessage({ ...message, message: "" })
                }, 10000)
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
        <div className={`page fadeIn  ${font} text-color`} >
            <BgAnimation night={night} />
            <Navbar className=' border-bottom nav-bg d-flex flex-row align-items-center' expand="md" style={{ zIndex: 800 }} sticky="top">
                <Container>
                    <Navbar.Brand href="/" className="h5 pl-2 fontCali pt-3 text-truncate text-color pointer">
                        LINH TRAN
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto text-center h6 font-bold">
                            <Nav.Link href="#" onClick={() => handleScroll(0)} className="d-flex flex-column justify-content-center align-items-center navLink "><strong className={aboutInView ? "activeSection" : "hover-underline-animation pointer"}>{data.nav.about.toUpperCase()}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(1)} className="d-flex flex-column justify-content-center align-items-center navLink pointer"><strong className={projectInView ? "activeSection" : "hover-underline-animation"}>{data.nav.projects.nav.toUpperCase()}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(2)} className="d-flex flex-column justify-content-center align-items-center navLink pointer"><strong className={skillInView ? "activeSection" : "hover-underline-animation"}>{data.nav.skills.toUpperCase()}</strong></Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll(3)} className="d-flex flex-column justify-content-center align-items-center navLink pointer"><strong className={experienceInView ? "activeSection" : "hover-underline-animation"}>{data.nav.experience.toUpperCase()}</strong></Nav.Link>
                            <Nav className="d-flex flex-row justify-content-center align-items-start">
                                <Nav.Link target="_blank" href="https://github.com/Linh-Tran-0312" className="mx-2 navLink pointer"><Icon icon={['fab', 'github']} size="lg" /></Nav.Link>
                                <Nav.Link target="_blank" href="https://www.linkedin.com/in/ch%C3%AD-linh-tr%E1%BA%A7n-a54928200/" className="mx-2 navLink pointer"><Icon icon={['fab', 'linkedin']} size="lg" /></Nav.Link>
                                <Nav.Link target="_blank" href="https://m.me/chilinh.tran.12139" className="mx-2 navLink pointer"><Icon icon={['fab', 'facebook-messenger']} size="lg" /></Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container ref={aboutRef} id="0" className="d-flex scroll justify-content-center align-items-center container" style={{ minHeight: 'calc(100vh - 60px)' }} >
                <Row className="container bg-white p-5 mt-2" >
                    <Col xs={12} lg={5} sm={12} className="  slideInDown my-3 d-flex align-items-center justify-content-center">
                         <div className="img-ava-container pointer">            
                              <Image src="ava3.jpg" className="img-ava" /> 
                        </div>  
                    </Col>
                    <Col xs={12} lg={7} sm={12} className="my-3">
                        <h2 className="fontCali my-name">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.changeDelay(75)
                                        .changeDeleteSpeed(50)
                                        .typeString(`<span style="color: #9dceff">${greeting}</span>`)
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString('<span style="color: #96a7b8">This is my portfolio site</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString(`${data.about.greeting}`)
                                        .pauseFor(4000)
                                        .start()

                                }}
                                options={{
                                    loop: true
                                }}
                            />

                        </h2>
                        {parse(data.about.introduction)}
                    </Col>
                </Row>
            </Container >
            {/* 
            <Container ref={projectRef} id="1" fluid className='d-flex  justify-content-center align-items-center  scroll container text-center  my-5'>
                    
                <Row className="d-flex justify-content-center  container bg-white py-5 px-4">
                    <Col xs={12}>
                    <h5 className="sectionTitle py-4">
                            <strong>
                                {data.nav.projects.title.toUpperCase()}
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center container-fluid">
                        <Row className="d-flex justify-content-center container">
                            {
                                data.projects.map((project, index) => <CardProject key={index} project={project} />)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container> */}

            <Container fluid className="bg-white scroll my-5" ref={projectRef} id="1">
                <Container className="py-5">
                    <div className="sectionTitle"><strong>{data.nav.projects.title.toUpperCase()}</strong></div>
                    <Row className='my-3  mb-5 py-2 justify-content-lg-between spacing-2 column-reverse'>
                        <Col lg={5} sm={12} className="text-start pr5">

                            <h3 className="my-3 text-color"><strong>{data.projects[0].title}</strong></h3>
                            <p>{parse(data.projects[0].summary)}</p>

                        </Col>
                        <Col lg={7} sm={12}>
                            <ProjectThumb project={data.projects[0]} />
                        </Col>
                    </Row>
                    <Row className='my-3 mb-5 py-2 justify-content-lg-between'>
                        <Col lg={7} sm={12} className="pr-5">
                            <ProjectThumb project={data.projects[1]} />
                        </Col>
                        <Col lg={5} sm={12} className="text-start pl5 container" >
                            <h3 className="my-3 text-color"><strong>{data.projects[1].title}</strong></h3>
                            <p>{parse(data.projects[1].summary)}</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container ref={skillRef} id="2" className="container d-flex justify-content-center align-items-center  text-center my-5 scroll">
                <Row className="d-flex justify-content-center container bg-white py-5 px-4">
                    <Col xs={12} lg={3} md={4} >
                        <h5 className="sectionTitle">
                            <strong>
                                {data.nav.skills.toUpperCase()}
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} lg={9} md={8} className="text-start ">
                        <Row>
                            <Col md={12} lg={6}>
                                <h6 className="text-start">
                                    <strong>{data.skills.technical.title.toUpperCase()}</strong>
                                </h6>
                                {parse(data.skills.technical.details)}
                            </Col>
                            <Col md={12} lg={6}>
                                <h6 className="text-start">
                                    <strong>  {data.skills.language.title.toUpperCase()}</strong>

                                </h6>
                                {parse(data.skills.language.details)}
                            </Col>
                        </Row>


                    </Col>
                    <Col lg={12}>
                        <Row className="justify-content-around" >
                            {
                                logo.map(i => <Col key={i} xs={4} md={3} lg={1} className="p-2 py-3">
                                    <ScrollAnimation offset={500} delay={Math.random() * 2000} animateIn='zoomIn'
                                        animateOut='zoomOut'>
                                        <img alt="logo" src={i} className="logo" />
                                    </ScrollAnimation>

                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container ref={experienceRef} id="3" className="container d-flex justify-content-center align-items-center scroll text-center my-5">
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
                            data.experience.map((e, index) =>
                                <Row key={index}>
                                    <Col lg={4} sm={12}>
                                        <p className="">{e.period}</p>
                                    </Col>
                                    <Col lg={8} sm={12}>
                                        <h6 className=""><strong>{e.company}</strong></h6>
                                        <p className="">{e.position}</p>
                                    </Col>
                                </Row>)
                        }

                    </Col>
                    <Col lg={4} className="d-flex justify-content-center align-items-start">
                        <ScrollAnimation offset={500} animateIn='zoomIn'
                            animateOut='fadeOut'>
                            <img alt="logo" src="hcmus-logo.png" className="hcmus" />
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>

            <Container className="d-flex justify-content-center align-items-center  text-center my-5">
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
                            data.contact.map((e, index) =>
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
                                <p className="">{eng ? "Message" : "Tin nh???n"}</p>
                            </Col>
                            <Col lg={10} sm={12}>
                                <Form ref={form} onSubmit={sendEmail}>
                                    <Row>
                                        <Col lg={6} sm={12}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>{eng ? "Subject" : "Ti??u ?????"}</Form.Label>
                                                <Form.Control type="text" placeholder="" name="subject" required />
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
                                                <Form.Label>{eng ? "Your Message" : "N???i dung"}</Form.Label>
                                                <Form.Control as="textarea" rows={3} name="message" required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className="d-flex justify-content-between">
                                            <p className={message.type ? "text-success" : "text-danger"}>{message.message}</p>
                                            <Button variant="secondary" className=" rounded-0" type="submit">{eng ? "Submit" : "G???i"}</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex justify-content-center align-items-center  text-center my-5">
                <Row className="align-items-center  bg-white container  justify-content-center fontCaliReg py-5">
                    <Col xs={12} lg={8} md={8}>
                        <h6>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."</h6>
                        <h5>- Steve Jobs -</h5>
                    </Col>
                </Row>
            </Container>
            <ButtonGroup className="language" vertical>
                <Button variant="outline-secondary" className="arrButton" onClick={() => handleScroll(0)}><Icon icon={['fas', 'angle-double-up']} /></Button>
                <Button variant="outline-secondary" className="lanButton" onClick={handleChangeLanguage}  ><strong>{eng ? 'VIET' : 'ENG'}</strong></Button>
                <Button variant="outline-secondary" className="lightButton" onClick={handleChangeTime}>{night ? <Icon icon={['fas', 'lightbulb']} size="lg" /> : <Icon icon={['fas', 'star-and-crescent']} size="lg" className="moon" />}</Button>
            </ButtonGroup>
            <Container fluid className="bg-white border-top text-center pt-3 pb-2 ">
                <h3 className="fontCookie"> Thanks for visiting my site </h3>
                <h6 className=" font-bold">Created by Tran Chi Linh</h6>
            </Container>
        </div>
    )
}

export default App;