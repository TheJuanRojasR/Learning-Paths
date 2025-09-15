'use strict';

import { readFile, writeFile, appendFile, unlink, access } from 'node:fs/promises';
import { constants } from 'node:fs';

// Archivo que se va a manipular
const fileName = 'asyncFS.txt';

// Funcion auxiliar para saber si un archivo existe
async function existeArchivo (archivo) {
    try {
        await access(archivo, constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}

// File System forma asincrona
// 1. Crear/escribir archivo
async function escribirArchivo () {
    try {
        const existe = await access(fileName);
        await writeFile(fileName, 'Hola, este contenido es creado desde una funcion asincrona.');
        console.log(existe ? 'Archivo sobrescrito ✅' : 'Archivo creado ✅');
    } catch (error) {
        console.error(`Error creando archivo: ${error.message}`);
    }
}

// escribirArchivo();

// 2. Leer un archivo
async function leerArchivo () {
    try {
        if (!(await existeArchivo(fileName))) {
            console.log('El archivo no existe');
            return;
        }

        const contenido = await readFile(fileName, 'utf-8');
        console.log(contenido);
    } catch (error) {
        console.error(`Error leyendo archivo: ${error.message}`);
    }
}

// leerArchivo();

// 3. Actualizar un archivo
async function actualizarArchivo () {
    try {
        if (!(await existeArchivo(fileName))) {
            console.log('El archivo no existe');
            return;
        }

        await appendFile(fileName, '\n\nEsta es una nueva linea desde la funcion de actualizar.\n', 'utf-8');
        console.log('Archivo actualizado correctamente.');
    } catch (error) {
        console.error(`Error actualizando archivo: ${error.message}`);
    }
}

// actualizarArchivo();

// 4. Eliminar un archivo
async function eliminarArchivo () {
    try {
        if (!(await existeArchivo(fileName))) {
            console.log('El archivo no existe');
            return;
        }
        
        await unlink(fileName);
        console.log('Archivo eliminado');
    } catch (error) {
        console.error(`Error eliminando archivo: ${error.message}`);
    }
}

// eliminarArchivo();