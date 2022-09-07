

const containerHTMLElement = document.getElementById('container');

// ciclare i numeri da 1 a 100
for(let number = 1; number <= 100; number++){



    let text = '';
    if (number % 3 === 0){
        text += 'Fizz'; 
    }

    if (number % 5 === 0){
        text += 'Buzz'; 
    }
    const result = text.length > 0 ? text : number;
    console.log( result );

    const element = document.createElement('div');

    element.className = 'square';
    if (text.length>0){
        element.classList.add(text);
    }
 
    element.append(result);

    containerHTMLElement.append(element);

}