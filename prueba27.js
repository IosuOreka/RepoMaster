/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
*/

const contarElementos = (string) => {
    let objReturn = {}

    let arrayObjetos = string.split(' ');
    let arrayAccesorio = [];

    for(let i = 0; i < arrayObjetos.length; i++){
        let palabraLimpia = arrayObjetos[i];
        if(palabraLimpia.split("").includes("-")){
            palabraLimpia = arrayObjetos[i].replace("-", "")
        }else{
            palabraLimpia = arrayObjetos[i].replace("_", "")
        }
        arrayAccesorio.push(palabraLimpia);
    }

    for (let i = 0; i < arrayAccesorio.length; i++) {
        let element = arrayAccesorio[i];

        if (objReturn[element] === undefined) {
            objReturn[element] = 0;
        }

        let conteo = 0;

        for(let j = 0; j < arrayAccesorio.length; j++){

            if(element === arrayAccesorio[j]){
                conteo += 1;
            }
        }

        objReturn[element] = conteo;
        conteo = 0;
    }


    return objReturn;
}

console.log(contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"));