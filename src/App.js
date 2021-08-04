
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Image, Card, Button, ButtonGroup, Spinner } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardProject from './components/ProjectCard';
import BgAnimation from './components/BgAnimation';
import parse from 'html-react-parser';
import './animate.css';
library.add(fab, fas);

const getData = async (path) => {

    let data = await fetch(path);
    return data.json();


}

const App = () => {
    const [data, setData] = useState("");
    const [eng, setEng] = useState(true);

    useEffect(() => {
        (async () => {
            let temp = "";
            if (eng) {
                temp = await getData('portfolio_eng.json');
                if (data) {
                    setData(temp);
                } else {
                    setTimeout(() => { setData(temp) }, 2500)
                }

            } else {
                temp = await getData('portfolio_vn.json');
                setData(temp);
            }
        })()

    }, [eng])
    const handleChangeLanguage = (e) => {
        setEng(preState => !preState)
    }
    if (!data) return (
        <Container className="fadeIn loading d-flex flex-column justify-content-center align-items-center">
            <h1>Welcome to my site</h1>
            <div className="loader"></div>
        </Container>
    )
    return (
        <div className="page fadeIn">
            <a id="about"/>
            <Navbar bg="light" variant="light" expand="sm" sticky="top">
                <Container>
                    <Navbar.Brand href="#about" className="text-dark h5">LINH TRAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto text-center h6">
                            <Nav.Link href="#about">{data.nav.about}</Nav.Link>
                            <Nav.Link href="#projects">{data.nav.projects}</Nav.Link>
                            <Nav.Link href="#skills">{data.nav.skills}</Nav.Link>
                            <Nav.Link href="#experience">{data.nav.experience}</Nav.Link>
                            <Nav className="d-flex flex-row justify-content-center">
                                <Nav.Link target="_blank" href="https://github.com/Linh-Tran-0312" className="mx-2"><Icon icon={['fab', 'github']} size="lg" /></Nav.Link>
                                <Nav.Link target="_blank" href="https://www.linkedin.com/in/ch%C3%AD-linh-tr%E1%BA%A7n-a54928200/" className="mx-2"><Icon icon={['fab', 'linkedin']} size="lg" /></Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container  className="d-flex justify-content-center align-items-center " style={{ minHeight: 'calc(100vh - 60px)' }}>
                <Row >
                    <Col xs={12} lg={5} sm={6} className="  slideInDown my-3 d-flex align-items-center justify-content-center">
                        <Image src="ava1.jpg" className="img-ava" />
                    </Col>
                    <Col xs={12} lg={7} sm={6} className="my-3">
                        <h3>{data.about.greeting}</h3>
                        {parse(data.about.introduction)}
                        <BgAnimation />
                    </Col>
                </Row>

            </Container >
            <a id="projects" />
             
            <Container fluid className=" text-center  bg-light">
                <Container  className=" text-center py-5 bg-light" >
                    <h2 className="my-4">{data.nav.projects.toUpperCase()}</h2>
                    <Row className="d-flex justify-content-center">
                        {
                            data.projects.map((project, index) => <CardProject key={index} project={project} />)
                        }
                    </Row>
                </Container>
            </Container>
      
            <a id="skills" />
            <Container className=" text-center py-5"  style={{ minHeight: 'calc(100vh - 60px)' }}>
                <h2 className="my-5">{data.nav.skills.toUpperCase()}</h2>
                <Row className="container">
                    <Col lg={6} xs={12} className="text-start">
                        <h4>{data.skills.language.title}</h4>
                        {parse(data.skills.language.details)}
                    </Col>
                    <Col lg={6} xs={12} className="text-start">
                        <h4>{data.skills.technical.title}</h4>
                        {parse(data.skills.technical.details)}
                    </Col>
                </Row>
            </Container>
           
            {/*  <Container className=" text-center my-5" >
                <h2 className="my-3">{data.nav.experience.toUpperCase()}</h2>
                <Row className="d-flex justify-content-center align-items-center">
                    {
                        data.experience.map((e, index) => <Col key={index} lg={4} xs={12} className="my-2 d-flex justify-content-center align-items-center">
                            <Card className="mx-2" style={{ width: '300px', minHeight: '150px' }}>
                                <Card.Header className="h5">{e.period}</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {e.position}
                                        </p>
                                        <p className="blockquote-footer">
                                            {e.company}
                                        </p>
                                    </blockquote>
                                </Card.Body>
                            </Card>

                        </Col>)
                    }

                </Row>
            </Container> */}
            <a id="experience"/>
            <Container fluid className="bg-light py-5">
            <h2 className="my-4 text-center">{data.nav.experience.toUpperCase()}</h2>
                <VerticalTimeline>
                   <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 onwards"
                        iconStyle={{ background: 'rgb(33, 150, 243)', textAlign: "center",color: '#fff' }}
                        icon={<Icon icon={['fas','graduation-cap']} size="lg"/>}

                    >
                          <h3 className="vertical-timeline-element-title">Bachelor of Science in Information Technology</h3>
                        <h5 className="vertical-timeline-element-subtitle">Bachelor Degree</h5>
                        <p  className="blockquote-footer">
                           Ho Chi Minh University of Science
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018 - 2020"
                        iconStyle={{ background: 'rgb(233, 30, 99)', textAlign: "center", color: '#fff' }}
                        icon={<Icon icon={['fas','briefcase']} size="lg"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Field Application Scientist</h3>
                        <h5 className="vertical-timeline-element-subtitle">Customer Service</h5>
                        <p className="blockquote-footer">
                           Biomedic Join Stock Company
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2014 - 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', textAlign: "center", color: '#fff' }}
                        icon={<Icon icon={['fas','graduation-cap']}  size="lg"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Biotechnology</h3>
                        <h5 className="vertical-timeline-element-subtitle">Bachelor Degree</h5>
                        <p  className="blockquote-footer">
                           Ho Chi Minh University of Science
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', textAlign: "center", color: '#fff' }}
                        icon={<Icon icon={['fas','star']}  size="lg"/>}
                    />
                </VerticalTimeline>
            </Container>
            <ButtonGroup className="language" vertical>
                <Button variant="outline-secondary" className="bg-light"><a href="#about" className="text-secondary"><Icon icon={['fas', 'chevron-up']} /></a></Button>
                <Button variant="outline-secondary" onClick={handleChangeLanguage} className="bg-light">{eng ? 'VIET' : 'ENG'}</Button>
            </ButtonGroup>
            <Container fluid className="bg-light text-center py-3 ">
                <h6>Created by Tran Chi Linh</h6>
            </Container>
        </div>
    )
}

export default App;