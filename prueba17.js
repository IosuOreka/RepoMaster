/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
*/

const invertirTexto = (string) => {

    let arrayInicial = [];

    for(let i = 0; i < string.length; i++){
        arrayInicial.push(string[i]);
    }

    let arraySecundario = [];

    for(let i = arrayInicial.length - 1; i >= 0; i--){
        arraySecundario.push(arrayInicial[i]);
    }

    let palabraFinal = '';

    for(let i = 0; i < arraySecundario.length; i ++){
        palabraFinal += arraySecundario[i];
    }

    return palabraFinal;
}

console.log(invertirTexto('Hola'));