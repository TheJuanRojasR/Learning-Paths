'use strict';

// Metodos basicos
console.log('Este es el console basico que utilizamos');
console.info('Se utiliza para mostrar informacion');
console.warn('Muestra advertencias');
console.error('Muestra errores');

// Metodos avanzados
// Tabla
const usuarios = [
    { nombre: 'Ana',  edad: 28, rol: 'Desarrollador' },
    { nombre: 'Juan',  edad: 34, rol: 'Diseñador' },
    { nombre: 'Ana',  edad: 41, rol: 'Gerente' }
]

console.table(usuarios);
// Si solo quiero mostrar alguna propiedad en particular
console.table(usuarios, ['rol']);

// Time : Tiempo que se demora en ejecutar lo que coloquemos en su rango. Se tiene que utilizar la misma etiqueta en ambos
// console.time('etiqueta'); | condigo ejecutandose | console.timeEnd('etiqueta');
console.time('Operacion');
for (let i = 0; i < 100000; i++) {
    // Operacion que consume tiempo
}
console.timeEnd('Operacion');

// Count : Cuenta cuantas veces se ha llamado a una console.count con una etiqueta en especifico
// console.count('etiqueta');
function ejemplo () {
    console.count('Contador');
}

// Otros metodos
// console.group()
// console.assert()
// console.trace()