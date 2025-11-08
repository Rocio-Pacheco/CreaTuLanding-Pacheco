<<<<<<< HEAD
import'../css/NavBar.css';
import logo from '../assets/logo.png'; 
import Cartwidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
=======
import '../css/NavBar.css'
import logo from '../../public/img/logo.png'
import CartWidget from './CartWidget'
import { Container, Nav, Navbar } from 'react-bootstrap'
>>>>>>> 14ae24c (agregar promesa)

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
<<<<<<< HEAD
          <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Componentes</Nav.Link>
            <Nav.Link href="#features">Armados</Nav.Link>
            <Nav.Link href="#pricing">Perifericos</Nav.Link>
          </Nav>
          <Cartwidget></Cartwidget>
        </Container>
        
      </Navbar>
   
    </>
  );
}

export default NavBar;
=======
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#componentes">Componentes</Nav.Link>
            <Nav.Link href="#armados">Armados</Nav.Link>
            <Nav.Link href="#perifericos">Perifericos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
>>>>>>> 14ae24c (agregar promesa)
