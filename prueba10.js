// Dada un array de enteros, detectar si esa lista
// de números es una permutación del 1 al ultimo número del array.
 
// En este caso una permutación es una secuencia de números
// en orden sin que falte ninguno entre ellos.
 
// Devolver el número faltante más grande.
 
// El array puede venir desordenado.
 
// Ejemplos:
// permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
// permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
// */


const encuentraElFaltante = (array) => {

    let faltante = 0;
    //PREVIA: Ver si todos los elementos son del tipo integer. MANEJO DE ERRORES.
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] != 'number'){
            return 'Ojo esta función sólo trabaja con integers.'
        }
    }

    // 1º Ordenar el array. SORT / FOR
    let arrayInside = array.sort(function(a, b){return a-b});
    console.log(arrayInside);

    // 2º Iteración y vamos comparando i y i + 1 del array.
    for(let i = 1; i < arrayInside.length; i++){
    // 3º En el momento en el que falle. Dar el valor que obtengo a faltante.
      if(eval(arrayInside[i] - 1) != arrayInside[i - 1]){
        faltante = arrayInside[i];
        return faltante;
      }
      faltante = arrayInside[arrayInside.length - 1]
    }
    return faltante;
}

console.log(encuentraElFaltante([1,2,3,4,5]));
console.log(encuentraElFaltante([5,2,true,1]));
console.log(encuentraElFaltante([null,2,4,1]));
