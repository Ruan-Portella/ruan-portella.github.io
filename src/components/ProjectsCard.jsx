import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../styles/ProjectsCard.css'
import PageContext from "../context/PageContext";
import { useContext } from 'react';
import {motion} from 'framer-motion'

export const ProjectCards = ({ title, imgUrl, stacks, id }) => {
  const {isBR, isDark} = useContext(PageContext);
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };


  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl}></img>
        <motion.div exit={{ opacity: 0 }} transition={transition} className='proj-txtx'>
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
          <button className={isDark ? '' : 'light_secondary'}><Link to={`/details/${id}`}>{isBR ? 'Conheça o projeto' : 'Know the project'}</Link></button>
        </motion.div>
      </div>
    </Col>
  )
}

ProjectCards.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.shape()),
  id: PropTypes.number.isRequired,
};
