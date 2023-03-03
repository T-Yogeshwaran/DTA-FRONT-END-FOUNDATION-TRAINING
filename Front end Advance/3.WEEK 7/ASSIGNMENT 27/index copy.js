
const Product = require('./product');

console.log("Product showall products.");
const allProducts = Product.getAllProducts();
console.log(allProducts);


console.log("Category based Products.");
const electronicsProducts = Product.getProductsByCategory('Electronics');
console.log(electronicsProducts);


console.log("Price Range based Products.");
const cheapProducts = Product.getProductsByPriceRange(0, 20);
console.log(cheapProducts);



console.log("out of stock Products.");
const outofstack = Product.getoutofstack(0);
console.log(outofstack);




console.log("In stock Products.");


const Instock = Product.getinstack();

for(item of Instock){
    console.log(item);
}

// console.log("Price Range based Products.");
// const cheapProducts = Product.getProductsByPriceRange(0, 20);
// console.log(cheapProducts);

