// src/BookFilter.js
import React from 'react';
import '../css/BookFilter.css';

const BookFilter = ({ categories, selectedCategory, setSelectedCategory }) => {

  return (
    <div className="book-filter-container">
      <h4 className="book-filter-title">Filter Books</h4>

      <div className="mb-2">
        <label className="book-filter-label">Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="book-filter-select">
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <input type='reset' value='Reset Filters' className='btn btn-primary book-filter-reset-btn' onClick={() => { setSelectedCategory('All'); }} />
    </div>
  );
};

export default BookFilter;
