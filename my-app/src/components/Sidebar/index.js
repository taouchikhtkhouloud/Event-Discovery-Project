import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logopfa.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Form, FormControl, Button} from 'react-bootstrap'



const Sidebar = () => (
    
        
        <Navbar className="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <div className='login'>
          <p>inscrivez-vous</p>
        <Button className='btn'>recherche</Button>

        </div>
       
     <Nav className="me-auto">
      
       
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Evenement</Nav.Link>
      <Nav.Link href="#pricing">Groupe</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="recherche"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">recherche</Button>
      </Form>

    </Nav>
    </Container>
  </Navbar>
    
)
export default Sidebar