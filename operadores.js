// OPERADORES DE COMPARACIÓN

let romperCabeza = eval('1.0 + 1.5');
console.log('primer console.log: ' + romperCabeza);

// OPERADOR AND &&

let number = 12;

if(number > 10){
    console.log('segundo console.log: ' + (number > 10 && number < 13));
}

// OPERADOR OR || 

if(number > 10 || number === 13){
    console.log('tercer console.log: ' + (number > 10 || number === 13));
}

// OPERADOR NOT !

let verdad = !false;

console.log('cuarto console.log: ' + verdad);


//OPERADOR TERNARIO

let evaluacionNumero = number > 10 ? 'Es mayor.' : 'Es menor.'

console.log(evaluacionNumero);