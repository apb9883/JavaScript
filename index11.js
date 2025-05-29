let a=5;
let b=a;

console.log(`a=${a}, b=${b}`);
a=8;
console.log(`a=${a}, b=${b}`);


let c={num:5};
let d=c;

console.log(`c=${c.num}, d=${d.num}`);
c.num=20;
console.log(`c=${c.num}, d=${d.num}`);


let e={num:15};
let f={num:15};
console.log(e===f);