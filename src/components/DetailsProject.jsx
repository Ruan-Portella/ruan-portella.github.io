import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { projects } from '../utils/projectData';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/DetailsProject.css'
import { motion } from 'framer-motion'
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';
import { SiGithub } from 'react-icons/si';



export default function DetailsProject() {
    const {isBR} = useContext(LanguageContext);
    const [project, setProject] = useState([])
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    useEffect(() => {
        const location = window.location.pathname;
        const id = parseInt(location.split("/").pop());

        if (project.length <= 0) {
            const Project = projects.filter((project) => project.id === id)
            setProject(Project);
        }
    }, [project])

    return (
        <motion.div>
            <motion.div className='projectLink'><Link to='/#projects' className='LinkProject'><span><FaArrowLeft size={40} /></span></Link></motion.div>
        <motion.section initial='initial' animate='animate' exit='exit' className='projectDetails'>
            <Container>
                {
                    project.map((proj) => (
                        <Container className='projectDetailContainer' key={proj.title}>
                            <Row>
                                <Col sm={6} md={5}>
                                    <motion.div initial={{y: '-600'}} animate={{y: 0, transition: {delay: 0.2, ...transition}}} className='TitleIcon'>
                                    <motion.h2>{proj.title}</motion.h2>
                                        <div className="project-icon">
                                            <a href={proj.link} target='_blank' rel="noreferrer"><SiGithub className="image" /></a>
                                            <a href={proj.link}  target='_blank' rel="noreferrer"><FaExternalLinkAlt className="image" /></a>
                                        </div>
                                    </motion.div>
                                    <motion.div className='imgCenter'>
                                        <motion.img initial={{width: '10%', x: '-70%',}} animate={{width: '100%', x: '0%', transition: {delay: 0.1, ...transition}}} src={proj.imgUrl}></motion.img>
                                    </motion.div>
                                    <motion.h3 initial={{y: '800'}} animate={{y: 0, transition: {delay: 0.2, ...transition}}}>{isBR ? 'Sobre o Projeto' : 'About The Project'}</motion.h3>
                                    <motion.p initial={{x: '2000'}} animate={{x: 0, transition: {delay: 0.2, ...transition}}}>{isBR ? proj.description : proj.descriptionEn}</motion.p>
                                    <motion.h3 initial={{x: '-2000'}} animate={{x: 0, transition: {delay: 0.2, ...transition}}}>{isBR ? 'Tecnologias' : 'Technologies'}</motion.h3>
                                    <motion.ul initial={{y: '800'}} animate={{y: 0, transition: {delay: 0.2, ...transition}}}>
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
    )
}