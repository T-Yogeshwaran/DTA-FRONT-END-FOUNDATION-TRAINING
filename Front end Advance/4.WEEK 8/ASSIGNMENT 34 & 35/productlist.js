import React from 'react';

const products = [
  { id: 1, name: 'iPhone 12', category: 'Mobiles' },
  { id: 2, name: 'Galaxy S21', category: 'Mobiles' },
  { id: 3, name: 'MacBook Air', category: 'Laptops' },
  { id: 4, name: 'ThinkPad X1 Carbon', category: 'Laptops' },
  { id: 5, name: 'iPad Pro', category: 'Tablets' },
  { id: 6, name: 'Surface Pro 7', category: 'Tablets' },
];

const ProductsList = ({ category = '' }) => {
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    
<div className='card'>
    <div>
      {filteredProducts.map((product, index) => (
        <div key={product.id} >
          <p>{product.name}</p>
          {/* <p>Category: {product.category}</p> */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductsList;