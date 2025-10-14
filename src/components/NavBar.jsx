import './css/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className='nav-container'>

        <a className='a-nav' href="#">Inicio</a>
        <a className='a-nav' href="#">componentes</a>
        <a className='a-nav' href="#">Pc armados</a>
        <a className='a-nav' href="#">Perifericos</a>

    </nav>
  );
};

export default NavBar;
