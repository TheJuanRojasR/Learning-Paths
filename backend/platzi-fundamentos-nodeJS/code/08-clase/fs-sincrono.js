'use strict';

// const fs = require('fs');
import fs from 'fs';

// Archivo que se va a manipular
const fileName = 'example.txt';

// File System forma sincrona
// 1. Crear un archivo si no existe o escribir contenido en un archivo si este existe.
fs.writeFileSync(fileName, 'Hola, este es un archivo de ejemplo');
console.log('Archivo creado correctamente');

// 2. Leer un archivo
const content = fs.readFileSync(fileName, 'utf-8');
console.log('File content:', content);

// 3. Actualizar un archivo
fs.appendFileSync(fileName, '\n\nEsta es una nueva linea.\n');
console.log('Archivo actualizado correctamente.');
console.log(content)

// 4. Eliminar un archivo
fs.unlinkSync(fileName);