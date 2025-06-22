import React, { useEffect, useState } from 'react';
import ProductCard from './productcard';
import Filters from './Filters';
import SortBar from './sortbar';
import './productlist.css';
import { Button } from 'react-bootstrap';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filters, setFilters] = useState({ category: '', maxPrice: 1000, inStock: false });
  const [sortKey, setSortKey] = useState('default');
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const applyFilters = (items) => {
    return items
      .filter(p => !filters.category || p.category === filters.category)
      .filter(p => p.price <= filters.maxPrice)
      .filter(p => !filters.inStock || p.rating.count > 100);
  };

  const applySort = (items) => {
    switch (sortKey) {
      case 'price-asc': return [...items].sort((a, b) => a.price - b.price);
      case 'price-desc': return [...items].sort((a, b) => b.price - a.price);
      case 'rating': return [...items].sort((a, b) => b.rating.rate - a.rating.rate);
      default: return items;
    }
  };

  const filtered = applySort(applyFilters(products));
  const displayed = filtered.slice(0, page * itemsPerPage);

  return (
    <div className="product-page">
      <Filters
        categories={categories}
        selectedFilters={filters}
        onChange={(key, value) => setFilters({ ...filters, [key]: value })}
      />
      <div className="main-content">
        <SortBar sortKey={sortKey} onChange={setSortKey} />
        <div className="products-grid">
          {displayed.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        {displayed.length < filtered.length && (
          <Button onClick={() => setPage(p => p + 1)} variant='primary'>Load More</Button>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;