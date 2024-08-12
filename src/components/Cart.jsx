import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, removeFromCart, sendOrder }) {
  const total = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={sendOrder}>Enviar Pedido</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
