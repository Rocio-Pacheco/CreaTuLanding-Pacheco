import '../css/NavBar.css'
import logo from '../../public/img/logo.png'
import CartWidget from './CartWidget'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
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
