let product={
company:'Mango',
price:800,
'item-name':'T-Shirt',
};


console.log(product);
console.log(product.company);
console.log(product.price);
console.log(product['company']);
console.log(product['item-name']);


let propertyName='item-name';

console.log(product[propertyName]);

// we can't write     console.log(product.propertyName);

delete product.company;
console.log(product);