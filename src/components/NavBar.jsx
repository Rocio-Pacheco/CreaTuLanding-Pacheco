import '../css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-container">

      <a className="a-nav" href="#">
        <img src="../logo.png" alt="logo" className='logo' />
      </a>
      <a className="a-nav" href="#">Componentes</a>
      <a className="a-nav" href="#">PC Armados</a>
      <a className="a-nav" href="#">Periféricos</a>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
