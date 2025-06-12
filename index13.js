let product={
    name: 'Jeans',
    size:'s',
    fit: 'Slim fit',
    'delivery-time':'Same day delivery',
};

let copyProduct=product;
console.log(product);
console.log(copyProduct);
copyProduct.size='m';
copyProduct.fit='regular fit';
console.log(product);
console.log(product);
console.log(product['delivery-time']);



let obj={
    message: 'good job',
    stat: 'complete',
};

console.log(obj);
 let{message, stat} = obj;
 console.log(message);
 console.log(stat);


 let product1={
    name: 'Jeans',
    size:'s',
    fit: 'Slim fit',
    'delivery-time':'Same day delivery',
};

let product2={
    name: 'Jeans',
    size:'s',
    fit: 'Slim fit',
    'delivery-time':'Same day delivery',
};

let product3={
    name: 'Jeans',
    size:'s',
    fit: 'Slim fit',
    'delivery-time':'Same day delivery',
};


function isIdenticalProduct(product, product1){
    if(typeof product!=='object' || typeof product1!=='object'){
        console.warn('Parameter passed was not an object');
        return false;
    }
    if(product==product1){
        return true;
    }
    if(product.name==product1.name &&
        product.size==product1.size &&
        product.fit==product1.fit )
return true;
else{
    return false;
}
    }

    console.log(isIdenticalProduct(product, ''));
    console.log(isIdenticalProduct(product1, product2));