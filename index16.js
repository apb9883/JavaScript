function doGreeting(personame='Dear'){

let date=new Date();
console.log(date);

let hours= date.getHours();
console.log(hours);

let heading=document.querySelector('#greeting');
if(hours>5 && hours<12){
    heading.innerText=`Good Morning ${personame}`;
}
else if(hours>=12 && hours< 18){
    heading.innerText=`Good Afternoon ${personame}`;
}
else {
    heading.innerText=`Good Night ${personame}`;
}
}

doGreeting('Ankit');

let numberOfTimesClicked=localStorage.getItem('numberOfTimesCliked')|| 0;
function buttonPressed(){
    console.log("Pressed");
    numberOfTimesClicked++;
    localStorage.setItem('numberOfTimesClicked',numberOfTimesClicked);
    updateButton();
}

function updateButton(){
let button=document.querySelector('#my-button');
    if(numberOfTimesClicked%2==0){
        button.classList.remove('js-odd');
        button.classList.add('js-even');
    }
    else{
        button.classList.remove('js-even');
        button.classList.add('js-odd');
    }
    button.innerText=numberOfTimesClicked;
}

updateButton();