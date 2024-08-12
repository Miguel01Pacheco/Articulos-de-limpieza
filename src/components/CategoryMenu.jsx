import React from 'react';
import '../styles/CategoryMenu.css';

function CategoryMenu({ categories, selectCategory }) {
  return (
    <div className="category-menu">
      {Object.keys(categories).map(category => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
