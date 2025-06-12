let numbers=[1,4,2,6,3,7,9];
console.log(numbers);
console.log(numbers[4]);

let doosra=[1, 'tree', true, null];
console.log(doosra);
console.log(doosra[2]);

let obj={Ankit: 23};
console.log(Array.isArray(doosra));
console.log(Array.isArray(obj));

let number=[12,45,32,76,89];
console.log(number);
number.push(10);
console.log(number);
console.log('popped'+ number.pop());
console.log(number);
//number.splice(2,4);
console.log(number);
console.log(number.toString());
console.log(number.sort());

let numbering=numbers;
numbering[2]=30;
console.log(numbering);
console.log(numbers);