let x={
    name: 'Ankit Prakash',
    'nick-name': 'Bittu',
    dob: '30-06-96',
    age: '29',
    percentage: '5.87',
    isMarried: 'False'
};

console.log(x);
console.log(x.name,x['nick-name'], x.dob, x.age, x.percentage, x.isMarried);
console.log(x['name']);

x.dob = '30-05-95';
console.log(x.dob);

x['age'] = 30;
console.log(x.age);


// we can print all things using In using const key
for(const key in x){
    console.log(key, x[key]);
}



