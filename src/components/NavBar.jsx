import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { US, BR } from 'country-flag-icons/react/3x2'
import { CiLight, CiDark } from 'react-icons/ci'
import { useContext } from "react";
import '../styles/NavBar.css'
import PageContext from "../context/PageContext";


export default function NavBar(details) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isToggler, setIsToggler] = useState(false);
  const { isBR, handleChangeLanguage, isDark, handleChangeColor } = useContext(PageContext);


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
    <Navbar collapseOnSelect expand="lg" className={`${scrolled ? "scrolled " : ""}${isDark ? 'nav_dark' : 'nav_light'}`} >
      <Container>
        <Navbar.Brand href="/">
          <p className="brandLogo">RP</p>
        </Navbar.Brand>
        {
          details.details ? (<Nav className="ms-auto"><Nav.Link className="navbar-link" onClick={() => {
            if (window.location.pathname.includes('/details')) {
              window.location.href = '/#projects'
            } else {
              window.location.href = '/#home'
            }
          }}>{isBR ? 'Voltar' : 'Return'}</Nav.Link></Nav>) : (
            <>
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
                    <Nav className="ms-auto">
                      <Nav.Link
                        href="#home"
                        data-to-scrollspy-id="home"
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => {
                          setActiveLink('home');
                          setTimeout(() => {
                            setIsToggler(false)
                            window.location.href = '#home'
                          }, 700);
                          return false;
                        }}
                      >
                        {isBR ? 'Inicio' : 'Home'}
                      </Nav.Link>
                      <Nav.Link href="#skills"
                        data-to-scrollspy-id="skills"
                        className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => {
                          setActiveLink('skills');
                          setTimeout(() => {
                            setIsToggler(false)
                            window.location.href = '#skills';
                          }, 700);
                          return false;
                        }}
                      >
                        {isBR ? 'Habilidades' : 'Skills'}
                      </Nav.Link>
                      <Nav.Link href="#projects"
                      data-to-scrollspy-id="projects"
                        className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => {
                          setActiveLink('projects');
                          setTimeout(() => {
                            setIsToggler(false)
                            window.location.href = '#projects';
                          }, 700);
                          return false;
                        }}
                      >
                        {isBR ? 'Projetos' : 'Projects'}
                      </Nav.Link>
                      <Nav.Link href="#contate-me"
                      data-to-scrollspy-id="contate-me"
                        className={activeLink === 'contate-me' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => {
                          setActiveLink('contate-me');
                          setTimeout(() => {
                            setIsToggler(false)
                            window.location.href = '#contate-me';
                          }, 700);
                          return false;
                        }}
                      >
                        {isBR ? 'Contate-me' : 'Contact Me'}
                      </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                      <div className="social-icon">
                        <a href="https://github.com/Ruan-Portella" className="iconSocial" target='_blank' rel="noreferrer"><SiGithub className="image" /></a>
                        <a href="https://www.linkedin.com/in/ruanportella/" className="iconSocial" target='_blank' rel="noreferrer"><FaLinkedinIn className="image" /></a>
                        {
                          isDark ? (
                            <button className="buttonColor" onClick={() => (handleChangeColor(false), setIsToggler(false))} ><CiLight className="image" /></button>
                          ) : (
                            <button className="buttonColor" onClick={() => (handleChangeColor(true), setIsToggler(false))}
                            ><CiDark className="image" /></button>
                          )
                        }
                        <DropdownButton id="dropdown-basic-button" title={isBR ? (
                        <>
                        <BR className="image" />
                        <span>BR</span>
                        </>) : (
                        <>
                        <US className="image" />
                        <span>EN</span>
                        </>
                        )}>
                          <Dropdown.Item onClick={ () => (handleChangeLanguage(false) , setIsToggler(false))} className={`${isDark ? 'languageDark' : 'languageLight'}`}>
                          <US className="image" />
                            <span>English</span>
                            </Dropdown.Item>
                          <Dropdown.Item onClick={ () => (handleChangeLanguage(true) , setIsToggler(false))} className={`${isDark ? 'languageDark' : 'languageLight'}`} >
                            <BR className="image" />
                            <span>Português</span>
                            </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </span>
                  </Navbar.Collapse>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          )
        }
      </Container>
    </Navbar>
  )
}
