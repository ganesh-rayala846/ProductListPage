import React from 'react';
import './productlist.css';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filters = ({ categories, selectedFilters, onChange }) => {
  const categoryOptions = [
    { value: '', label: 'All' },
    ...categories.map(cat => ({ value: cat, label: cat }))
  ];

  return (
    <aside className="filters">
      <h3>Filters</h3>

      <label>Category</label>
      <Select
        options={categoryOptions}
        value={categoryOptions.find(opt => opt.value === selectedFilters.category)}
        onChange={(selected) => onChange("category", selected.value)}
        className="mb-3"
      />

      <label>Price Range</label>
      <input
        type="range"
        min="0"
        max="1000"
        value={selectedFilters.maxPrice}
        onChange={e => onChange("maxPrice", e.target.value)}
        className="form-range mb-2"
      />
      <div>Up to ₹{selectedFilters.maxPrice}</div>

      <Form.Check
        type="checkbox"
        id="inStockCheckbox"
        label="In Stock Only"
        checked={selectedFilters.inStock}
        onChange={e => onChange("inStock", e.target.checked)}
        className="mt-2"
      />
    </aside>
  );
};

export default Filters;
