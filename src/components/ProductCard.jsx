import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      {product.imagen && <img src={product.imagen} alt={product.nombre || 'Producto'} />}
      <h3 className='nombre-card'>{product.nombre || 'Producto sin nombre'}</h3>
      <p>{product.descripcion || 'Sin descripción disponible.'}</p>
      <p className='precio-card'>$ {product.precio || 'N/A'}</p>
      <p className='promocion-card'>{product.promocion || ''}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
}


export default ProductCard;
