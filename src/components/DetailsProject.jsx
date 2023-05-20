import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { projects } from '../utils/projectData';
import { FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/DetailsProject.css'
import { motion } from 'framer-motion'
import PageContext from '../context/PageContext';
import { useContext } from 'react';
import { SiGithub } from 'react-icons/si';
import { Footer } from './Footer';
import NavBar from './NavBar';



export default function DetailsProject() {
    const {isBR} = useContext(PageContext);
    const [project, setProject] = useState([])
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    useEffect(() => {
        const location = window.location.pathname;
        const id = parseInt(location.split("/").pop());

        if (project.length <= 0) {
            const Project = projects.filter((project) => project.id === id)
            setProject(Project);
            window.scrollTo(0, 0)
        }
    }, [project])

    return (
        <section>
        <NavBar details={true}/>
        <motion.div className='container-project'>
        <motion.section initial='initial' animate='animate' exit='exit' className='projectDetails'>
            <Container>
                {
                    project.map((proj) => (
                        <Container className='projectDetailContainer' key={proj.title}>
                            <Row>
                                <Col className='col-project'>
                                    <motion.div className='imgCenter'  initial={{width: '0%', x: '-20%',}} animate={{width: '100%', x: '0%', transition: {delay: 0.1, ...transition}}} >
                                        <motion.h2>{proj.title}</motion.h2>
                                        <motion.img src={proj.imgUrl}></motion.img>
                                    </motion.div>
                                    <motion.div className='project-info' initial={{y: '-600'}} animate={{y: 0, transition: {delay: 0.2, ...transition}}}>
                                    <motion.h3>{isBR ? 'Sobre o Projeto' : 'About The Project'}</motion.h3>
                                        <div className="project-icon">
                                            <a href={proj.link} target='_blank' rel="noreferrer"><SiGithub className="image" /></a>
                                            <a href={proj.link}  target='_blank' rel="noreferrer"><FaExternalLinkAlt className="image" /></a>
                                        </div>
                                    </motion.div>
                                    <motion.p className='project-description' initial={{x: '2000'}} animate={{x: 0, transition: {delay: 0.2, ...transition}}}>{isBR ? proj.description : proj.descriptionEn}</motion.p>
                                    <motion.h3 initial={{x: '-2000'}} animate={{x: 0, transition: {delay: 0.2, ...transition}}}>{isBR ? 'Tecnologias' : 'Technologies'}</motion.h3>
                                    <motion.ul initial={{y: '2000'}} animate={{y: 0, transition: {delay: 0.2, ...transition}}}>
                                        {
                                            proj.stacks.map((stack, index) =>
                                                <li key={index}>
                                                    {
                                                        <p>{stack.name}</p>
                                                    }
                                                </li>)
                                        }
                                    </motion.ul>
                                </Col>
                            </Row>
                        </Container>


                    ))
                }
            </Container>
        </motion.section>
        </motion.div>
        <motion.div initial={{x: '-2000', width: '0%'}} animate={{x: 0, width: '100%', transition: {delay: 0.2, ...transition}}}>
        <Footer />
        </motion.div>
        </section>
    )
}