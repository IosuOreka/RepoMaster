/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/
 

const coleccion = [
    ['A','B','C','D'],
    ['Z','V','K','S'],
    ['F','G','O','E']
]


const puedeFormarPalabra = (string, array) => {
    let puedeFormar = false;

    let contador = 0;
    let palabraLength = string.split("").length;
    let arrayLetras = string.split("");

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(arrayLetras.includes(array[i][j])){
                contador++;
            }
        }
    }

    return contador === palabraLength ? console.log(true) : console.log(false);
}

puedeFormarPalabra('PERRO', coleccion)  
puedeFormarPalabra('CASO', coleccion) 