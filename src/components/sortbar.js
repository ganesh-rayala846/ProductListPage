import React from 'react';
import Select from 'react-select';
import './productlist.css';

const options = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
  { value: 'rating', label: 'Popularity (Rating)' },
];

const SortBar = ({ sortKey, onChange }) => {
  return (
    <div className="sort-bar">
      <label><strong>Sort by:</strong> 
      <Select
        value={options.find(opt => opt.value === sortKey)}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
        
      />
      </label>
    </div>
  );
};

export default SortBar;
