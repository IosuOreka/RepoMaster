const personas = [
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Carlos', edad: 25 },
    { nombre: 'Sofía', edad: 35 },
    { nombre: 'David', edad: 28 }
];
  
const edades = personas.map(persona => persona.edad);
console.log(edades);
const mayorEdad = Math.max(...edades);
console.log(mayorEdad);
const menorEdad = Math.min(...edades);
console.log(menorEdad);
  
const resultado = [menorEdad, mayorEdad];
  
console.log(resultado);