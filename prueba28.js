/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 
*/

const invertirEntero = (num) => {
    let esNegativo = num >= 0 ? false: true;
    return esNegativo ? parseInt(Math.abs(num).toString().split("").reverse().join("")) * -1 : volteadoNum;
}

console.log(invertirEntero(123));
console.log(invertirEntero(-123));
