import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import '../styles/ProjectsCard.css'
import PageContext from "../context/PageContext";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

export const ProjectCards = ({ title, imgUrl, stacks, id }) => {
  const {isBR, isDark} = useContext(PageContext);
  const [isVisible, setIsVisible] = useState(true);
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };


  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };


  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }
    setIsVisible(true)
  }, [inView]);


  return (
    <Col sm={6} md={4}>
      <motion.div className='proj-imgbx'>
        <img src={imgUrl} alt={title}></img>
        <motion.div transition={transition} className='proj-txtx'>
          <h4>{title}</h4>
          <section className='proj-span'>
            <ul>
              {
                stacks.map((stack) => (
                  <li key={stack.name} className={isDark ? '' : 'light'}>{stack.image}<span>{stack.name}</span></li>
                ))
              }
            </ul>
          </section>
          <motion.button  disabled={isVisible}  ref={ref} className={isDark ? '' : 'light_secondary'} onClick={() => handleClick(id)}>{isBR ? 'Sobre o Projeto' : 'About the project'}</motion.button>
        </motion.div>
      </motion.div>
    </Col>
  )
}

ProjectCards.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.shape()),
  id: PropTypes.number.isRequired,
};
