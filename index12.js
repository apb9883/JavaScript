let product={
company:'Mango',
price:800,
'item-name':'T-Shirt',
displayPrice: function(){
return `$${this.price.toFixed(2)}`;
}
};


//without using dot 
let {company} = product;
let {price} = product;
// or we can write
//let {company, price} = product;

console.log(company);
console.log(price);


// The objects we created above is equal to lower objects.

let product1={
company:'Mango',
price:800,
'item-name':'T-Shirt',
displayPrice(){
return `$${this.price.toFixed(2)}`
}
};
