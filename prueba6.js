// Crea una función que se llame eliminar duplicados de un array y devuelva un array limpio.

//Sin funciones de ayuda, sólo con for y control de ciclos.

const eliminarDuplicados = (array) =>{
    let arrayLimpio = [];
    for(let i = 0; i < array.length; i++){
       // console.log(array[i]);
        if(!arrayLimpio.includes(array[i])){
            //console.log('Condición: ' + arrayLimpio.includes(array[i]));
            arrayLimpio.push(array[i]);
        }
    }
    return arrayLimpio;
}


//console.log(eliminarDuplicados([1,2,3,4,5,6,7,8,9]));
//console.log(eliminarDuplicados([1,2,4,4,4,6,7,8,9]));


const eliminarDuplicados2 = (array) =>{
    let arrayLimpio = [];
    
        arrayLimpio = array.filter((el, index) => {
            return array.indexOf(el) === index; 
        });

    return arrayLimpio;
}


console.log(eliminarDuplicados2([1,2,3,4,5,6,7,8,9]));
console.log(eliminarDuplicados2([1,2,4,4,4,6,7,8,9]));