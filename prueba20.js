/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio 
*/
 
const deboSerSocio = (numVeces) =>{

    let sinSerSocio = numVeces * 10;
    let serSocio = false;
    let siendoSocio = 0;

    for(let i = 1; i <= numVeces; i++){
        //1º if
        if( i === 1){
            siendoSocio += (10 *0.78);
        }

        //2º if 
        else if( i === 2){
            siendoSocio += (10 *(0.78**2));
        }

        else{
            siendoSocio += (10 * (0.78**3))
        }
        //Else que es para el resto (0.78 ** 3)
    }

    serSocio = siendoSocio < sinSerSocio;

    console.log(`Como usario casual te sale a: ${sinSerSocio}`);
    console.log(`Como socio te sale a: ${siendoSocio}`);
    console.log(`${serSocio === false ? 'No te sale a cuenta ser socio' : 'Te sale a cuenta ser socio.'}`);
}

deboSerSocio(15);

// Operador ternario

// let x = 5;
// let mayorEdad = x >= 18 ? true : false;
