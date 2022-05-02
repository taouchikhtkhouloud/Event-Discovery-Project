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
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return ( 
    <div>
        <Navbar className="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand className='gpt3__navbar-links_logo' exact to="#home">
            <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <div className="gpt3__navbar-sign">
        <div className='login'>
          <NavLink to='register'><p>inscrivez-vous</p></NavLink>
        <NavLink to="login"><Button className='btn'>Se connecter</Button></NavLink>

        </div>
        </div>
       
     <Nav className="me-auto">
     <div className="gpt3__navbar-links_container">
       
      <NavLink className="a" exact to="/">Home</NavLink>
      <NavLink className="b" exact to="evenement">Evenement</NavLink>
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
       <NavLink className="a" exact to="/">Home</NavLink>
      <NavLink className="b" exact to="evenement">Evenement</NavLink>
       </div>
       <div className="gpt3__navbar-menu_container-links-sign">
       <NavLink to='register'><p>inscrivez-vous</p></NavLink>
        <NavLink to="login"><Button className='btn'>Se connecter</Button></NavLink>
       </div>
     </div>
     )}
   </div>
  </Navbar>
   </div>
);
     };
export default Sidebar