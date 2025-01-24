// Dada una cadena de TextDecoder, comprobar si es un palíndromo o no.

const esPalindromo = (string) => {
    return string === string.split('').reverse().join('');
}


console.log(esPalindromo('prueba'));
console.log(esPalindromo('ala'));