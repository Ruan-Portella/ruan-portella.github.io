import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import LanguageContext from "../context/LanguageContext";
// import '../styles/Footer.css'

export const Footer = () => {
  const {isBR} = useContext(LanguageContext);

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
            <p>{isBR ? 'Copyright 2023. Todos os Direitos Reservados' : 'Copyright 2023. All Rights Reserved'}</p>
        </Row>
      </Container>
    </footer>
  )
}
