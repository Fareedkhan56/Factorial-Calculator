let number = document.getElementById('number')
let result = document.getElementById('result')
let fact = 1;

function Factorial(){
    for (let i = 1; i <= number.value; i++) {
        fact = fact * i;
    }
    result.value = fact
}