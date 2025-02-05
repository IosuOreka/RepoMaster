/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 6
*/

const eliminarDuplicados = (array) => {
    let contador = {};   
    let resultado = [];  

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        if (contador[num] === undefined) {
            contador[num] = 0;
        }

        if (contador[num] < 2) {
            resultado.push(num);
            contador[num]++;
        }
    }

    return resultado.length;
};


console.log(eliminarDuplicados([4, 4, 4, 2, 2, 3]));
console.log(eliminarDuplicados([6, 6, 2, 2, 2, 3]));
console.log(eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]));

