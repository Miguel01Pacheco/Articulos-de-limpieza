import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      {product.imagen && <img src={product.imagen} alt={product.nombre || 'Producto'} />}
      <h3>{product.nombre || 'Producto sin nombre'}</h3>
      <p>{product.descripcion || 'Sin descripción disponible.'}</p>
      <p>Precio: ${product.precio || 'N/A'}</p>
      <p>Promoción: {product.promocion || 'Sin promoción'}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
}


export default ProductCard;
