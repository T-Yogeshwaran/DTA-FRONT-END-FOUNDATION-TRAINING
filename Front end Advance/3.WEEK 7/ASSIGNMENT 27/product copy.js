let products = [
    {id: 1, name: 'Product 1', price: 10, category: 'Electronics', stock: '10'},
    {id: 2, name: 'Product 2', price: 20, category: 'Clothing',stock: '30'},
    {id: 3, name: 'Product 3', price: 30, category: 'Electronics',stock: '0'},
    {id: 4, name: 'Product 4', price: 40, category: 'Books',stock: '20'},
    {id: 5, name: 'Product 5', price: 50, category: 'Clothing',stock: '0'},
  ];
  
  module.exports = {
    // ... other methods
  
    getProductsByCategory: function(category) {
      return products.filter((product) => product.category === category);
    },

    getAllProducts: function() {
      return products;
    },
  
    getProductsByPriceRange: function(minPrice, maxPrice) {
        return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
      },
  

      getoutofstack: function(sc) {
        return products.filter((product) => product.stock <= sc);
      },
  
      getinstack: function() {
        return products.filter((product) => product.stock > 0);
      },
  



    addProduct: function(product) {
      products.push(product);
    },
  
    updateProduct: function(id, product) {
      const index = products.findIndex((product) => product.id === id);
      if (index !== -1) {
        products[index] = {...products[index], ...product};
      }
    },
  
    deleteProduct: function(id) {
      products = products.filter((product) => product.id !== id);
    },
  };
