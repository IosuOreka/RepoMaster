// Dado un array con la siguiente estructura: Array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// Devolver un sólo array con los números mayores dentro de los anteriores.

const devolverMayores = (array) => {
    let mayores = [];
    for(let i = 0; i < array.length; i++ ){
        let inserto = 0;
        for(let k = 0; k < array[i].length; k++){
            if(inserto < array[i][k]){
                inserto = array[i][k];
            }
        }
        mayores.push(inserto);
    }
    return mayores;
}

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(devolverMayores(array));