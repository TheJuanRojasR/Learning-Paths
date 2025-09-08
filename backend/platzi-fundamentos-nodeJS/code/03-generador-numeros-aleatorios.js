'use strict';

const args = process.argv.slice(2);
let min = 1;
let max = 100;

if (args.length >= 2) {
    const parsedMin = parseInt(args[0], 10);
    const parsedMax = parseInt(args[1], 10);

    if (!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax) {
        min = parsedMin;
        max = parsedMax;
    } else if (isNaN(parsedMin) || isNaN(parsedMax)) {
        return console.log('Datos ingresados invalidos.')
    } else {
        console.log('⚠️ Rango Invalido. Usando valores por defecto (1-100)');
    }
}

// Genera un numero aleatorio entre el min y el max, incluyendolos. 
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Numero aleatorio generado entre ${min} y ${max}: ${randomNumber}`); 