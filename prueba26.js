/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 
// Devuelve: Hola Victor Robles, hace frio
*/

const fraseFiltrada = (string) => {
    let stringFiltrado = '';

    let stringAccesorio = string.split(' ');

    for(let i = 0; i < stringAccesorio.length; i++){
        let palabraArray = stringAccesorio[i].split('');
        if(palabraArray.length >= 4){
            stringFiltrado += stringAccesorio[i] + ' ';
        }
    }

    return stringFiltrado;
}

console.log(fraseFiltrada("Hola soy Victor Robles, hoy hace frio"));