import'../css/NavBar.css';
import logo from '../assets/logo.png'; 
import Cartwidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
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