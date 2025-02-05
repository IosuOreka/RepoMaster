/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
 
*/

const ordenarPorLongitud = (array) => {

    let arrayOrdenado = array;
    let auxiliar = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].includes(' ')){
            auxiliar.push(array[i].split(" "));
            arrayOrdenado.splice(i, 1);
        }
    }

    for(let i = 0; i< auxiliar.length; i++){
        let long = auxiliar[i].length;
        for(let k = 0; k < long; k++){
            arrayOrdenado.push(auxiliar[i][k]);
        }
    }

    arrayOrdenado.sort(function(a, b) {
        return a.length - b.length
    });


    return arrayOrdenado;
}


let frase = [
    "Hola",
    "soy",
    "Víctor Robles",
    "como",
    "estas",
    "hoy",
    "amigo",
    "yo",
    "voy",
    "a",
    "estudiar",
    "ahora"
]


console.log(ordenarPorLongitud(frase));