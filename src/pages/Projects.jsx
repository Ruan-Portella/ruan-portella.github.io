import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { projects } from '../utils/projectData';
import { ProjectCards } from '../components/ProjectsCard'
import { motion } from 'framer-motion';
import PageContext from "../context/PageContext";
import { useEffect } from 'react';
import { useContext } from 'react';
import '../styles/Projects.css'
import { useState } from 'react';

export function Projects() {
    const [visibleCount, setVisibleCount] = useState(6);
    const { isBR, isDark } = useContext(PageContext);
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };



    useEffect(() => {
        const locationUrl = () => {
            const location = window.location.href;
            const id = (location.split("/"));
            if (id[3] === '#projects') {
                return window.location.href = '/#projects'
            } else {
                return () => { }
            }
        };
        locationUrl()
    }, [])

    return (
        <motion.section exit={{ opacity: 0 }} transition={transition} className='project' id='projects'>
            <Container>
                <motion.div
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    initial={{ opacity: 0, x: 200, rotate: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}>
                    <Row>
                        <Col>
                            <h2>{isBR ? 'Projetos' : 'Projects'}</h2>
                            <p>{isBR ? 'No decorrer da minha trajetória como dev, desenvolvi as seguintes habilidades:' : "During my career as a dev, I developed the following skills:"}</p>
                            <Tab.Container id='projects-tabs' defaultActiveKey="all">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all" onClick={() => setVisibleCount(6)} >{isBR ? 'Todos' : 'All'}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="front-end" onClick={() => setVisibleCount(6)}>Front-End</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="back-end" onClick={() => setVisibleCount(6)}>Back-End</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey='all'>
                                        <Row>
                                            {
                                                projects.slice(0, visibleCount).map((project, index) => {
                                                    return (
                                                        <ProjectCards key={index} {...project}></ProjectCards>
                                                    )
                                                })
                                            }
                                            {
                                                projects.length > visibleCount && (
                                                    <div className='buttonProject'>
                                                        <Button className={`visibleBtn ${isDark ? '' : 'visibleBtnLight'}`}  variant='dark' onClick={() => setVisibleCount(prevCount => prevCount + 6)} ><a>Ver mais</a></Button>
                                                    </div>)
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='front-end'>
                                        <Row>
                                            {
                                                projects.filter((project) => project.type === 'FrontEnd').slice(0, visibleCount).map((project, index) => {
                                                    return (
                                                        <ProjectCards key={index} {...project}></ProjectCards>
                                                    )
                                                })
                                            }
                                            {
                                                projects.filter((project) => project.type === 'FrontEnd').length > visibleCount && (
                                                    <div className='buttonProject'>
                                                        <Button className={`visibleBtn ${isDark ? '' : 'visibleBtnLight'}`}  variant='dark' onClick={() => setVisibleCount(prevCount => prevCount + 6)} ><a>Ver mais</a></Button>
                                                    </div>)
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='back-end'>
                                        <Row>
                                            {
                                                projects.filter((project) => project.type === 'BackEnd').slice(0, visibleCount).map((project, index) => {
                                                    return (
                                                        <ProjectCards key={index} {...project}></ProjectCards>
                                                    )
                                                })
                                            }                                            {
                                                projects.filter((project) => project.type === 'BackEnd').length > visibleCount && (
                                                    <div className='buttonProject'>
                                                        <Button className={`visibleBtn ${isDark ? '' : 'visibleBtnLight'}`}  variant='dark' onClick={() => setVisibleCount(prevCount => prevCount + 6)} ><a>Ver mais</a></Button>
                                                    </div>)
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </motion.section>
    )
}
