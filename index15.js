  let product={
    name:'T-Shirt',
    price:'1000',
    rating: {
        stars: 4.5,
        noOfReviews: 453,
    },
};


localStorage.setItem("Name", "Ankit Prakash");
localStorage.setItem("Price", "1 billion");
console.log(localStorage.getItem('Name'));


localStorage.setItem('product', product);
console.log(localStorage.getItem('product'));


localStorage.setItem('product', JSON.stringify(product));
console.log(localStorage.getItem('product'));

let product2 = JSON.parse(localStorage.getItem('product'));
console.log(product2);

localStorage.removeItem('Price');
localStorage.clear();
