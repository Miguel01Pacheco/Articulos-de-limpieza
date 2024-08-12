import React from 'react';
import Cart from '../components/Cart';
import '../styles/CartPage.css';

function CartPage({ cart, removeFromCart, sendOrder }) {
  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} sendOrder={sendOrder} />
    </div>
  );
}

export default CartPage;
