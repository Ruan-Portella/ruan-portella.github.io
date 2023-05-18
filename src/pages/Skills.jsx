import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { motion } from 'framer-motion';
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export function Skills() {
    const {isBR} = useContext(LanguageContext);

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-content">
                        <motion.div 
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      initial={{ opacity: 0, x: -200, rotate: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: false }}>
                            <h2>
                                {isBR ? 'Minhas Habilidades' : 'My Skills'}</h2>
                            <p>
                                {isBR ? 'No decorrer da minha trajetória como dev, desenvolvi as seguintes habilidades:' : "During my career as a dev, I developed the following skills:"}</p>
                            <Tab.Container id="skills-tabs" defaultActiveKey="front" >
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="front">Front-End</Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="back">Back-End</Nav.Link>
                                    </Nav.Item> */}
                                    <Nav.Item>
                                        <Nav.Link eventKey="test">{isBR ? 'Testes' : 'Tests'}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="outros">{isBR ? 'Outros' : 'Others'}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUpSkill">
                                </Tab.Content>
                            </Tab.Container>
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
