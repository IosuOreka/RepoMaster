/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

//Operaciones con arrays.

let numeros = [2, 4, 5, 6];

numeros.push(5);
numeros[2] = 5;
numeros.sort((a, b) => a - b);
numeros.includes(4);

console.log('ARRAY TRAS CAMBIOS: ' + numeros);


// Objetos.

let persona = {
    nombre: 'Karla',
    edad: 25,
    ciudad: 'Pamplona'
};


persona.pais = 'España'; 
delete persona.ciudad; 
persona.edad = 30; 

console.log('OBJETO TRAS CAMBIOS:', persona);


//SETS

let conjunto = new Set([1, 2, 3, 4]); //MIRAR PYTHON.

conjunto.add(5); 
conjunto.delete(2); 
console.log('Conjunto contiene 3:', conjunto.has(3));

console.log('SET TRAS CAMBIOS:', conjunto);

//MAPS

let mapa = new Map();
mapa.set('nombre', 'Ana');
mapa.set('edad', 30);


mapa.set('ciudad', 'Barcelona'); 
mapa.delete('edad'); 
mapa.set('nombre', 'María');

console.log('Mapa:', mapa);

console.log('MAPA TRAS CAMBIOS: ', mapa);


//PARTE EXTRA - AGENDA


const readline = require('readline');

let agenda = [];

// Crear interfaz de lectura porque VSCode no tiene la posibilidad de hacer una lectura de datos como el navegador.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// 1 PASO: muestro un menú.

const mostrarMenu = () => {
    console.log(`
    === Agenda de Contactos ===
    [1] Añadir contacto
    [2] Buscar contacto
    [3] Actualizar contacto
    [4] Eliminar contacto
    [5] Mostrar todos los contactos
    [6] Salir
    `);
    rl.question('Elige una opción: ', manejarOpcion);
}



//Control efectivo de la aplicación.
const manejarOpcion = (opcion) => {
    switch (opcion) {
        case '1': 
            rl.question('Introduce el nombre: ', (nombre) => {
                rl.question('Introduce el teléfono: ', (telefono) => {
                    agregarContacto(nombre, telefono);
                    mostrarMenu();
                });
            });
            break;

        case '2': 
            rl.question('Introduce el nombre a buscar: ', (nombre) => {
                buscarContacto(nombre);
                mostrarMenu();
            });
            break;

        case '3': 
            rl.question('Introduce el nombre del contacto a actualizar: ', (nombre) => {
                rl.question('Introduce el nuevo teléfono: ', (nuevoTelefono) => {
                    actualizarContacto(nombre, nuevoTelefono);
                    mostrarMenu();
                });
            });
            break;

        case '4': 
            rl.question('Introduce el nombre del contacto a eliminar: ', (nombre) => {
                eliminarContacto(nombre);
                mostrarMenu();
            });
            break;

        case '5': 
            mostrarTodosLosContactos();
            mostrarMenu();
            break;

        case '6': 
            console.log('Saliendo de la agenda. ¡Hasta luego!');
            rl.close();
            break;

        default:
            console.log('Opción no válida. Intenta de nuevo.');
            mostrarMenu();
    }
}

const agregarContacto = (nombre, telefono) => {
    if (!/^\d{1,11}$/.test(telefono)) {
        console.log('Error: El número de teléfono debe ser numérico y tener como máximo 11 dígitos.');
        return;
    }

    agenda.push({ nombre, telefono });
    console.log('Contacto agregado:', { nombre, telefono });
}


const buscarContacto = (nombre) => {
    let resultados = agenda.filter((contacto) =>
        contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    if (resultados.length > 0) {
        console.log('Resultados de búsqueda:', resultados);
    } else {
        console.log('No se encontraron contactos con ese nombre.');
    }
}

const actualizarContacto = (nombre, nuevoTelefono) => {
    let contacto = agenda.find(
        (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (contacto) {
        if (!/^\d{1,11}$/.test(nuevoTelefono)) {
            console.log('Error: El número de teléfono debe ser numérico y tener como máximo 11 dígitos.');
            return;
        }

        contacto.telefono = nuevoTelefono;
        console.log('Contacto actualizado:', contacto);
    } else {
        console.log('Contacto no encontrado.');
    }
}

const eliminarContacto = (nombre) => {
    let index = agenda.findIndex(
        (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (index !== -1) {
        console.log('Contacto eliminado:', agenda.splice(index, 1)[0]);
    } else {
        console.log('Contacto no encontrado.');
    }
}

const mostrarTodosLosContactos = () => {
    if (agenda.length === 0) {
        console.log('La agenda está vacía.');
    } else {
        console.log('Lista de contactos:', agenda);
    }
}


// PASO 2: Inicio ese menu.

mostrarMenu();
