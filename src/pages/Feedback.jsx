import { Container, Col } from 'react-bootstrap'
import '../styles/Feedback.css'
import NavBar from '../components/NavBar';
import {BsFillSendCheckFill} from 'react-icons/bs'
import { Footer } from '../components/Footer';
import PageContext from '../context/PageContext';
import { useContext } from 'react';

function Feedback() {
    const { isBR } = useContext(PageContext);

  return (
    <>
    <NavBar details/>
    <section className='feedback-page'>
    <Container className='feedback_container'>
        <Col className='feedback_col'>
            <i><BsFillSendCheckFill size={150} /></i>
            <h2>{isBR ? 'Formulário Enviado ' : 'Form Submitted'}</h2>
            <p>{isBR ? 'Muito Obrigado! Sua submissão foi recebida ' : 'Thank you very much! Your submission has been received'}</p>
        </Col>
    </Container>
    </section>
    <Footer />
    </>
  )
}

export default Feedback;
