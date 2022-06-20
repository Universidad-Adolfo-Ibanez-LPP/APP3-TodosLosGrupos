var _ = require('underscore');
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('\x1b[31m', 'No se ha encontrado el archivo');
    } else {
        let file = _.map(data.replace(/\r\n/g, '\n').split('\n'),
            function (x) {
                return x.split(' ').map(Number)
            })
        let x = EntradaYSalida(file, 0)/file[0].length
        let y = 0
        let salida = ((EntradaYSalida(file, 1) +1)/file[0].length) -1
        let path = [];
        let caminos = [];
        let posicion = [];
        let camino = [];
        findPaths(file, path, x, y, salida, caminos, posicion, camino);
        console.log("\x1b[32m", 'Ya tenemos todos los caminos posibles!')
    }
});

function findPaths(matriz, path,  i, j, salida, caminos, posicion, camino) {
    // base case
    if (matriz == null || matriz.length === 0) {
        return
    }
    //obtengo los extremos de fila y columna
    let M = matriz.length;
    let N = matriz[0].length;
