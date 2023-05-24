import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { motion } from 'framer-motion';
import '../styles/Contact.css'
import { useContext } from 'react';
import PageContext from '../context/PageContext';

export const Contact = () => {
    const intialState = {
        fullName: '',
        email: '',
        subject: '',
        message: '',
    }
    const intialStateValidate = {
        fullName: false,
        email: false,
        subject: false,
        message: false,
    }
    const [errorMessage, setErrorMessage] = useState(false);
    const [validatedForm, setValidatedForm] = useState(false);
    const [state, setState] = useState(intialState);
    const [validate, setValidate] = useState(intialStateValidate);
    const [show, setShow] = useState(true);

    const { isBR, isDark } = useContext(PageContext);



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const validateFormInputs = (validate.fullName && validate.email && validate.subject && validate.message);
        if (form.checkValidity() === false) {
            event.preventDefault();
        } if (!validateFormInputs) {
            setErrorMessage(true);
            setShow(true)
            setValidatedForm(false);
        } else {
            setErrorMessage(false);
            setShow(true);
            setValidatedForm(true);
        }
    };

    const handleChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
        setErrorMessage(false)
    }

    useEffect(() => {
        const validateFields = () => {
            const regex = /\S+@\S+\.\S+/;
            const validateEmail = regex.test(state.email);
            setValidate({
                fullName: (state.fullName.length >= 4 ? true : false),
                email: validateEmail,
                subject: (state.subject.length >= 5 ? true : false),
                message: (state.message.length >= 5 ? true : false),
            })
        }
        validateFields();
    }, [state])


    return (
        <motion.div
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        id='contate-me'>
        <section className='contact'>
            <Container>
                    <Row className='contact-form'>
                        <Col sm={8}>
                            <motion.h2>{isBR ? 'Contate-me' : 'Contact Me'}</motion.h2>
                            <Form noValidate validated={validatedForm} onSubmit={handleSubmit} action="https://formsubmit.co/ruanmorales29@gmail.com" method="POST">
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name="_next" value="https://www.ruanportella.dev/feedback"></input>
                                <Row className="mb-3">
                                    <Form.Group sm="4" controlId="validationCustom10">
                                        <Form.Control
                                            className='inputForm'
                                            name='Nome Completo'
                                            autoComplete='off'
                                            required
                                            onChange={(event) => handleChange('fullName', event.target.value)}
                                            value={state.firstName}
                                            isValid={validate.fullName}
                                            isInvalid={!validate.fullName}
                                            type="text"
                                            placeholder={isBR ? 'Nome Completo *' : 'FullName *'}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group sm="4" controlId="validationCustom10">
                                        <Form.Control
                                            className='inputForm'
                                            name='Email'
                                            autoComplete='off'
                                            required
                                            onChange={(event) => handleChange('email', event.target.value)}
                                            value={state.email}
                                            isValid={validate.email}
                                            isInvalid={!validate.email}
                                            type="email"
                                            placeholder="Email *"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group sm="4" controlId="validationCustom10">
                                        <Form.Control
                                            className='inputForm'
                                            name='Assunto'
                                            autoComplete='off'
                                            required
                                            onChange={(event) => handleChange('subject', event.target.value)}
                                            value={state.subject}
                                            isValid={validate.subject}
                                            isInvalid={!validate.subject}
                                            type="text"
                                            placeholder={isBR ? 'Assunto *' : 'Subject *'}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group sm="4" controlId="validationCustom10">
                                        <Form.Control
                                            className='inputForm'
                                            name='Mensagem'
                                            as='textarea'
                                            autoComplete='off'
                                            rows={3}
                                            required
                                            onChange={(event) => handleChange('message', event.target.value)}
                                            value={state.message}
                                            isValid={validate.message}
                                            isInvalid={!validate.message}
                                            type="text"
                                            placeholder={isBR ? 'Messagem *' : 'Mensage *'}
                                        />
                                    </Form.Group>
                                </Row>
                                <div className='toastInfo'>
                                    {
                                        errorMessage && (
                                            <ToastContainer className="p-3">
                                                <Toast bg='danger' onClose={() => (setShow(false), setErrorMessage(false))} show={show} >
                                                    <Toast.Header closeButton closeLabel='string' animation={true}  >
                                                        <strong className="me-auto">{isBR ? "Contato" : 'Contact'}</strong>
                                                        <small className="text-muted">{isBR ? "Agora" : 'Just Now'}</small>
                                                    </Toast.Header>
                                                    <Toast.Body>{isBR ? "Informações incorretas!" : 'Incorrect information!'}</Toast.Body>
                                                </Toast>
                                            </ToastContainer>)
                                    }
                                </div>
                                <Button className={`buttonSend ${isDark ? '' : 'buttonSendLight'}`}  variant='dark' type="submit"><span>{isBR ? 'Mande sua Mensagem ' : 'Send Your Message'}</span></Button>
                            </Form>
                        </Col>
                    </Row>
            </Container>
        </section>
        </motion.div>
    )
}
