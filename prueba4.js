// Escribe una función llamada esPalindromo que reciba una cadena de texto y devuelva true si es un palíndromo 
// (se lee igual de adelante hacia atrás) o false en caso contrario.

const esPalindromo = (string) =>{
    return string === string.split('').reverse().join('');
}

console.log(esPalindromo('Ala'));

console.log(esPalindromo('ala'));
