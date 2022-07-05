var count = 0;

var Curent_Number = document.getElementById('currentNumber');


function increment(){
    count++;
    Curent_Number.innerHTML = count
}

function decrement(){
    count--;
    Curent_Number.innerHTML = count
   
}