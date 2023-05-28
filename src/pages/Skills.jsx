import { Col, Container, Row} from "react-bootstrap";
import { SkillsCards } from '../components/SkillsCards';
import { SkillData } from '../utils/skillData';
import { motion } from 'framer-motion';
import { useContext } from "react";
import PageContext from "../context/PageContext";
import '../styles/Skill.css'

export function Skills() {
    const {isBR} = useContext(PageContext);

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-content'>
                        <motion.div 
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      initial={{ opacity: 0, x: -200, rotate: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: false }}>
                            <h2>
                                {isBR ? 'Minhas Habilidades' : 'My Skills'}</h2>
                            <p>
                                {isBR ? 'No decorrer da minha trajetória como dev, desenvolvi as seguintes habilidades:' : "During my career as a dev, I developed the following skills:"}</p>
                                <Container className="container_skills">
                                        <Row className="row_skills top">
                                        <Col>
                                            <div className="skills_table left">
                                            <h2>Front-End</h2>
                                            <ul className="list_item">
                                                <SkillsCards {...SkillData[0]}></SkillsCards>
                                            </ul>
                                            </div>
                                        </Col>
                                        <Col >
                                        <div className="skills_table right">
                                            <h2>Back-End</h2>
                                            <ul className="list_item">
                                                <SkillsCards {...SkillData[1]}></SkillsCards>
                                            </ul>
                                            </div>
                                        </Col>
                                        </Row>
                                        <Row className="row_skills bottom">
                                        <Col>                                       
                                         <div className="skills_table  left">
                                            <h2>{isBR ? 'Testes' : 'Tests'}</h2>
                                            <ul className="list_item">
                                                <SkillsCards {...SkillData[2]}></SkillsCards>
                                            </ul>
                                            </div>
                                        </Col>
                                        <Col>
                                        <div className="skills_table right">
                                            <h2>{isBR ? 'Outros' : 'Others'}</h2>
                                            <ul className="list_item">
                                                <SkillsCards {...SkillData[3]}></SkillsCards>
                                            </ul>
                                            </div>
                                        </Col>
                                        </Row>
                                        </Container>
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
