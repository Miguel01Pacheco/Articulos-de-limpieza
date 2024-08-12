import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Artículos de Limpieza</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">
          <img src="/images/cart_icon.png" alt="Cart" className="cart-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
