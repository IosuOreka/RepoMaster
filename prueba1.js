// Dado un número, devolver completa su tabla de multiplicar.


const tablaMultiplicar = (n) => {
    for(let i = 0 ; i <= 10; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

tablaMultiplicar(3);

tablaMultiplicar(5);