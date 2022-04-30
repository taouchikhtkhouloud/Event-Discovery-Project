import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logopfa.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Form, FormControl, Button} from 'react-bootstrap'
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return ( 
    <div>
        <Navbar className="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand className='gpt3__navbar-links_logo' href="#home">
            <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <div className="gpt3__navbar-sign">
        <div className='login'>
          <Navbar.Brand><p>inscrivez-vous</p></Navbar.Brand>
        <Button className='btn'>Se connecter</Button>

        </div>
        </div>
       
     <Nav className="me-auto">
     <div className="gpt3__navbar-links_container">
       
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#evenement">Evenement</Nav.Link>
     </div>
     

    </Nav>
    </Container>
     <div className="gpt3__navbar-menu">
     {toggleMenu
       ? <RiCloseLine color="#4F46BA" size={27} onClick={() => setToggleMenu(false)} />
       : <RiMenu3Line color="#4F46BA" size={27} onClick={() => setToggleMenu(true)} />}
     {toggleMenu && (
     <div className="gpt3__navbar-menu_container scale-up-center">
       <div className="gpt3__navbar-menu_container-links">
       <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#evenement">Evenement</Nav.Link>
       </div>
       <div className="gpt3__navbar-menu_container-links-sign">
       <Navbar.Brand><p>inscrivez-vous</p></Navbar.Brand>
        <Button className='btn'>Se connecter</Button>
       </div>
     </div>
     )}
   </div>
  </Navbar>
   </div>
);
     };
export default Sidebar