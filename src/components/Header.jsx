
import { Link } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';
import React from 'react';
import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const checkbox = useRef();

  const handleClick = () => {
    checkbox.current.checked = false; 
  }

  return (
    <div>
      <nav className='navbar'>
        <Container>
          <a href='/' className='logo'>
            {/* <img src={logo} alt="Logo"/> */}
          </a>
          <input type="checkbox" className="menu-btn" id="menu-btn" ref={checkbox} />
          <label className="menu-icon" htmlFor='menu-btn'>
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            {/* <li><HashLink to='/#About' smooth  className='btnNavbar' onClick={handleClick}>Sobre</HashLink></li> */}
            {/* <li><HashLink to='/#Otc' smooth className='btnNavbar' onClick={handleClick}>Educação</HashLink></li> */}
            <li style={{fontSize: 14.4}}><Nav.Link as={Link} to="/unidades" className='btnNavbar' onClick={handleClick}>Unidades</Nav.Link></li>
            {/* <li><HashLink to='/#ContactUs' smooth className='btnNavbar' onClick={handleClick}>Contato</HashLink></li> */}
          </ul>
        </Container>
      </nav>
    </div>
  )
}

export default Header;