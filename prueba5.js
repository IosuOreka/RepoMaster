// Dado un objeto ir extrayendo lo siguiente:


const usuarioCompleto = {
    id: 12345,
    nombre: "Carlos Pérez",
    edad: 30,
    ciudad: "Madrid",
    direccion: {
      calle: "Gran Vía",
      numero: 25,
      piso: 4,
      codigoPostal: "28013",
      pais: "España",
      ubicacion: {
        latitud: 40.416775,
        longitud: -3.703790,
      },
    },
    contacto: {
      telefono: "+34 654 321 987",
      email: "carlos.perez@example.com",
      redesSociales: {
        twitter: "@carlosp",
        instagram: "carlos_insta",
        linkedin: "linkedin.com/in/carlosperez",
      },
    },
    trabajo: {
      puesto: "Ingeniero de Software",
      empresa: {
        nombre: "Tech Solutions",
        direccion: {
          calle: "Paseo de la Castellana",
          numero: 101,
          codigoPostal: "28046",
        },
        empleados: 200,
        industria: "Tecnología",
      },
      experiencia: [
        {
          empresa: "Startup Innovadora",
          puesto: "Desarrollador Junior",
          años: 2
        },
        {
          empresa: "Empresa Tradicional",
          puesto: "Analista de Sistemas",
          años: 3
        },
      ],
      habilidades: ["JavaScript", "React", "Node.js", "SQL", "AWS"],
    },
    hobbies: ["Leer", "Correr", "Fotografía", "Viajar"],
    viajes: [
      {
        destino: "París",
        año: 2019,
        motivos: ["Vacaciones", "Cultura"],
      },
      {
        destino: "Nueva York",
        año: 2021,
        motivos: ["Trabajo"],
      },
      {
        destino: "Tokio",
        año: 2023,
        motivos: ["Cultura", "Tecnología"],
      },
    ],
    educación: {
      universidad: {
        nombre: "Universidad Complutense de Madrid",
        grado: "Ingeniería Informática",
        años: {
          inicio: 2010,
          fin: 2015,
        },
      },
      cursosAdicionales: [
        {
          nombre: "Curso de React Avanzado",
          institucion: "Platzi",
          año: 2019,
        },
        {
          nombre: "Certificación AWS",
          institucion: "Udemy",
          año: 2021,
        },
      ],
    },
    mascotas: [
      {
        tipo: "Perro",
        nombre: "Max",
        edad: 5,
      },
      {
        tipo: "Gato",
        nombre: "Luna",
        edad: 3,
      },
    ],
    historialMedico: {
      alergias: ["Polen", "Mariscos"],
      operaciones: [
        {
          tipo: "Cirugía de rodilla",
          año: 2018,
        },
      ],
      vacunas: ["COVID-19", "Tétanos", "Hepatitis B"],
    },
    comprasRecientes: [
      {
        producto: "Portátil",
        precio: 1200,
        tienda: "Amazon",
      },
      {
        producto: "Cámara de fotos",
        precio: 800,
        tienda: "MediaMarkt",
      },
    ],
    suscripciones: [
      {
        servicio: "Netflix",
        tipo: "Premium",
        precioMensual: 15.99,
      },
      {
        servicio: "Spotify",
        tipo: "Familiar",
        precioMensual: 9.99,
      },
      {
        servicio: "Amazon Prime",
        tipo: "Estándar",
        precioAnual: 49.99,
      },
    ],
    proyectosPersonales: [
      {
        nombre: "Aplicación para gestionar tareas",
        tecnologías: ["React", "Firebase"],
        estado: "En desarrollo",
      },
      {
        nombre: "Blog personal",
        tecnologías: ["HTML", "CSS", "JavaScript"],
        estado: "Completado",
      },
    ],
};


//   1. Extraer nombre, edad y saludar al usuarioCompleto.

console.log(`Hola usuario ${usuarioCompleto.nombre} de edad ${usuarioCompleto.edad} te deseo un buen día.`);

// 2. Imprimir por consola el código postal de la empresa en la que trabaja el usuario.

console.log('El código postal es: ' + usuarioCompleto.trabajo.empresa.direccion.codigoPostal);

// 3. Muestra la cantidad de años de experiencia laboral sumando los años en cada puesto.

console.log(usuarioCompleto.trabajo.experiencia);

let experiencia = usuarioCompleto.trabajo.experiencia;
let anios = 0;

for(let i = 0; i < experiencia.length; i++){
    anios += experiencia[i].años;
}

console.log('total: ' + anios);

// Accede al nombre de la primera mascota del usuario.

// Obtén el año en que el usuario completó su educación universitaria.

// Ejercicios intermedios
// Itera sobre el arreglo de hobbies del usuario e imprime cada uno.

let hobbies = usuarioCompleto.hobbies;

hobbies.forEach(hobby => {
    console.log(hobby)
});

// Muestra los nombres de todas las empresas donde el usuario ha trabajado, usando un bucle.

let empresas = usuarioCompleto.trabajo.experiencia;
console.log(empresas);

for(let i = 0; i < empresas.length; i++){
    console.log(empresas[i].empresa);
}

// Agrega un nuevo hobby al arreglo de hobbies y muestra el arreglo actualizado.

let hobbiesModified = usuarioCompleto.hobbies;

console.log(hobbiesModified);

hobbiesModified = hobbiesModified.push('Pintar');

console.log(hobbiesModified);

// Accede al arreglo de viajes y crea un arreglo nuevo que contenga solo los nombres de los destinos.

let viajes = [];
let extraidos = usuarioCompleto.viajes;

console.log(extraidos);

extraidos.forEach(extraido => {
    viajes.push(extraido.destino);
});

console.log(viajes);

// Crea una función llamada calcularEdadMascotas que sume las edades de todas las mascotas del usuario.

// Agrega un nuevo objeto al arreglo de comprasRecientes representando un producto que acaba de comprar.

// Accede al arreglo de suscripciones y calcula el costo total de todas las suscripciones en un mes.

// Modifica el estado del proyecto "Aplicación para gestionar tareas" a "Completado".

// Agrega una nueva vacuna al historial médico del usuario y muestra el historial actualizado.

// Ejercicios avanzados
// Crea una función que reciba el objeto usuarioCompleto y devuelva un arreglo con los nombres de todas las redes sociales que usa.

// Crea una función que recorra las propiedades del objeto direccion y las imprima en formato clave: valor.

// Crea una función que reciba como parámetro un año y devuelva los destinos de los viajes realizados en ese año.

// Agrega una nueva subcategoría al historial médico llamada consultasRecientes, que sea un arreglo de objetos con fecha y motivo. Llena este arreglo con 3 consultas ficticias.

// Crea una función que tome el objeto usuarioCompleto y devuelva una lista de todas las tecnologías que el usuario conoce (tanto en habilidades como en proyectosPersonales).

// Filtra las empresas del historial laboral del usuario y devuelve solo aquellas donde trabajó más de 2 años.