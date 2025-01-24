// Dada una palabra, buscarla en la frase y devolver cuantas veces aparece esta palabra en la frase.
// La frase y la palabra deben ser parámetros de una función. 

const cuentaMiPalabra = (palabra, string) =>{
    let contador = 0; 
    let palabras = string.split(' ');

    console.log('Palabras en string: ' + palabras);

    for(let i = 0; i <= palabras.length; i++){
        if(palabra == palabras[i]){
            contador++;
        }
    }
    return contador;
}

console.log(cuentaMiPalabra('Prueba', 'Esto es una prueba'));
console.log(cuentaMiPalabra('Prueba', 'Esto es una Prueba'));