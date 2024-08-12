import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.imagen} alt={item.nombre} />
      <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio: ${item.precio}</p>
        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default CartItem;
