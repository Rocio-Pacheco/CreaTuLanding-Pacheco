import '../css/NavBar.css'
import logo from '../assets/img/logo.png'
import CartWidget from './CartWidget'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavBarBS() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/categoria/componentes">Componentes</Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/armado">Armados</Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/perifericos">Periféricos</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBS;