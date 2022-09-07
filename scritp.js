const containerHTMLElement = document.getElementById('container');


for(let number = 1; number <= 100; number++)

let text = '';
if (number % 3 === 0){
    text += 'Fizz'; 
}

if (number % 5 === 0){
    text += 'Buzz'; 
}


const result = text.length > 0 ? text : number;
console.log( result );