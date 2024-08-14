import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className='titulo'>
      <img src="/logo-mass-sin-fondo.png" alt="Logo" className="logo-mass" />
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">
          
          Ver Carrito
          <img src="/icono-carrito.png" alt="Cart" className="cart-icon" />
       

        </Link>
      </nav>
    </header>
  );
}

export default Header;
