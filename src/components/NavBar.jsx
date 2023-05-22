import { useEffect, useState} from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { US, BR } from 'country-flag-icons/react/3x2'
import {CiLight, CiDark} from 'react-icons/ci'
import { useContext } from "react";
import '../styles/NavBar.css'
import PageContext from "../context/PageContext";


export default function NavBar(details) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isToggler, setIsToggler] = useState(false);
  const {isBR, handleChangeLanguage, isDark, handleChangeColor} = useContext(PageContext);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  })

  useEffect(() => {
    document.body.classList.toggle('light', !isDark);
  }, [isDark]);



  return (
    <Navbar collapseOnSelect expand="lg" className={`${scrolled ? "scrolled " : ""}${isDark ? 'nav_dark' : 'nav_light'}`}>
      <Container>
        <Navbar.Brand href="/">
          <p className="brandLogo">RP</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={isToggler ? 'hamburger-x' : ''} onClick={() => isToggler ? setIsToggler(false) : setIsToggler(true)}>
          <span className="hamburger-icon"></span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
                    className={isDark ? 'offcanvas_dark' : 'offcanvas_light'}
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end">
                    <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav">
                          {
                            details.details ? (<Nav  className="ms-auto"><Nav.Link className="navbar-link"  onClick={() => {
                                  window.location.href = '/#projects'
                          }}>{isBR ? 'Voltar' : 'Return'}</Nav.Link></Nav>) : (
                            <>
                              <Nav className="ms-auto">
                                <Nav.Link
                                    href="#home"
                                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                          setActiveLink('home');
                                            window.location.href = '#home'
                                        }, 400);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Inicio' : 'Home'}
                                </Nav.Link>
                                <Nav.Link href="#skills"
                                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                          setActiveLink('skills');
                                            window.location.href = '#skills';
                                        }, 400);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Habilidades' : 'Skills'}
                                </Nav.Link>
                                <Nav.Link href="#projects"
                                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                          setActiveLink('projects');
                                            window.location.href = '#projects';
                                        }, 400);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Projetos' : 'Projects'}
                                </Nav.Link>
                                <Nav.Link href="#contate-me"
                                    className={activeLink === 'contate-me' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                          setActiveLink('contate-me');
                                            window.location.href = '#contate-me';
                                        }, 500);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Contate-me' : 'Contact Me'}
                                </Nav.Link>
                                </Nav>
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href="https://github.com/Ruan-Portella" target='_blank' rel="noreferrer"><SiGithub className="image" /></a>
                                    <a href="https://www.linkedin.com/in/ruanportella/" target='_blank' rel="noreferrer"><FaLinkedinIn className="image" /></a>
                                    {
                                      isBR ? (
                                        <button className="buttonFlag" onClick={() => handleChangeLanguage(false)}><US className="image" /></button>
                                      ) : (
                                        <button className="buttonFlag" onClick={() => handleChangeLanguage(true)}><BR className="image" /></button>
                                      )
                                    }
                                    {
                                      isDark ? (
                                        <button className="buttonColor" onClick={() => handleChangeColor(false)} ><CiLight className="image" /></button>
                                      ) : (
                                        <button className="buttonColor" onClick={() => handleChangeColor(true)}><CiDark className="image" /></button>
                                      )
                                    }
                                </div>
                            </span>
                            </>
                                                        )
                                                      }
                        </Navbar.Collapse>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
