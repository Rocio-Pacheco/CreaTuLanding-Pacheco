import '../css/NavBar.css'
import logo from '../assets/img/logo.png'
import CartWidget from './CartWidget'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to='/'>
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
          <Nav className="me-auto">
            <NavLink className='a-nav' to='/categoria/componentes'>Componentes</NavLink>
            <NavLink className='a-nav' to='/categoria/armado'>Armados</NavLink>
            <NavLink className='a-nav' to='/categoria/perifericos'>Perifericos</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar