import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import productsData from '../data/products.json';
import '../styles/HomePage.css';

function HomePage({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(productsData)[0]);

  return (
    <div className="home-page">
      <CategoryMenu categories={productsData} selectCategory={setSelectedCategory} />
      <ProductList productsData={productsData} category={selectedCategory} addToCart={addToCart} />
    </div>
  );
}

export default HomePage;
