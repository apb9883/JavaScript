function OneToTen(n){
    for(let i=1; i<=n; i++){
        console.log(i);
    }
    console.log();
}

OneToTen(10);
OneToTen(20);

function equat(a,b){
    return Math.abs(a*a*a) + Math.abs(b*b*b);
} 

console.log(equat(-4,5))