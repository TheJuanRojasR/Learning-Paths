'use strict';

// const os = require('node:os');
import os from 'node:os';

function showSystemInfo () {
    console.log(`Sistema operativo: ${os.type()}`);
    console.log(`Plataforma: ${os.platform()}`);
    console.log(`Arquitectura: ${os.arch()}`);
    console.log(`Version OS: ${os.release()}`);

    const uptime = os.uptime();
    console.log(`System Uptime: ${uptime} seconds`);

    const totalMem = os.totalmem();
    console.log(`Total Memory: ${totalMem / 1024 / 1024} MB`);

    const freeMem = os.freemem();
    console.log(`Free Memory: ${freeMem / 1024 / 1024} MB`);

    console.log('CPU info:');
    const cpus = os.cpus();
    cpus.forEach((cpu, index) => {
        console.log(`Core ${index + 1}: ${cpu.model} @ ${cpu.speed} GHz`);
    });

    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`Hostname: ${os.hostname}`);

    console.log(`Numero de nucleos: ${os.availableParallelism()}`);
}

showSystemInfo();