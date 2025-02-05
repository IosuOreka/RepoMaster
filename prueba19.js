/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

let palabras = ["nombre", "apellido", "nombre", "nombre", "apellido"];
 
const renombrarArchivos = (archivos) => {
    let contador = {};
    let resultado = [];

    for (let archivo of archivos) {
        if (contador[archivo]) {
            let nuevoNombre = `${archivo}(${contador[archivo]})`;
            resultado.push(nuevoNombre);
            contador[archivo]++; 
        } else {
            resultado.push(archivo);
            contador[archivo] = 1; 
        }
    }
    
    return resultado;
};

console.log(renombrarArchivos(palabras));   