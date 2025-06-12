let alarm=()=>
    console.log(`Subah ho gayi Uth Jao.${new Date()}`);;
let timerId=setTimeout(alarm,5000);
console.log(`Alarm set with timerId:${timerId}`);
console.log(timerId);


// console.log('Alarm set');

let intervalId=setInterval(alarm,1000);
setTimeout(()=>clearInterval(intervalId),2000);
