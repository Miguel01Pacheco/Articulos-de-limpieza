import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ productsData, category, addToCart }) {
  const products = productsData[category];

  // Verifica si la categoría tiene productos
  if (!products || !Array.isArray(products) || products.length === 0) {
    return <p>No hay productos disponibles en esta categoría.</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
