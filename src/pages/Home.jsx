import NavBar from "../components/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowDownCircle } from 'react-icons/bs'
import { motion } from 'framer-motion';
import headerImg from '../images/code-typing-animate.svg'
import PageContext from "../context/PageContext";
import { useContext } from "react";
import '../styles/Home.css'
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "../components/Footer";


export default function Home() {
  const {isBR, isDark} = useContext(PageContext);

  return (
    <section className={isDark ? '' : 'light'}>
        <NavBar/>
        <section className="banner" id="home">
            <section className="bannerContent">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <div>
                                <motion.div
                                   whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                   initial={{ opacity: 0, x: -200, rotate: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}>
                                <span className="tagline">
                                    {isBR ? 'Olá, Seja Bem-Vindo' : "Hello! You're Welcome"}</span>
                                </motion.div>
                                <motion.div
                                   whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                   initial={{ opacity: 0, x: 200, rotate: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}>
                                <h1>{isBR ? `Meu nome é` : "My name is"}<span className="wrap">{`Ruan Portella.`}</span></h1>
                                <p>
                                    {isBR ? 'Sou Desenvolvedor Web Full Stack, apaixonado por tecnologia e adoro o que faço. Estou cada vez evoluindo mais e aprendendo para fazer o meu trabalho melhor.' : "I'm a Full Stack Web Developer, passionate about technology and I love what I do. I'm evolving more and more and learning to do my job better. "}
                                   </p>
                                </motion.div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <div>
                            <motion.div
                                   whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                   initial={{ opacity: 0, y: 200, rotate: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}>
                                <img src={headerImg} alt="Header Img" />
                            </motion.div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <p className='ArrowCircleContent'>
                <a href='#skills' className='ArrowCircle' ><BsArrowDownCircle size={40} /></a>
            </p>
        </section>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </section>
  )
}
