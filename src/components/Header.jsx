import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className='titulo'>
        <h1>MAAS</h1>
        <h2>Artículos de Limpieza</h2>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">
          <div className='link-carrito'>
          Ver Carrito
          <img src="../public/images/icono-carrito.png" alt="Cart" className="cart-icon" />
          </div>

        </Link>
      </nav>
    </header>
  );
}

export default Header;
