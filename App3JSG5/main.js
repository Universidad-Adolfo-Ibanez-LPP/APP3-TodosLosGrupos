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
// Si llegue al final imprimo el path
    if (i === salida && j === matriz[0].length - 1) {
        posicion.push(i)
        posicion.push(j)
        let pos = posicion.slice()
        camino.push(pos)
        let camino_copy = camino.slice()
        caminos.push(camino_copy)
        fs.writeFile('hola.txt', JSON.stringify(caminos), function (err) {
            if (err) {
                console.error('\x1b[31m', 'No se pudo ejecutar la aplicacion');
            }
        });
        posicion.pop()
        posicion.pop()
        camino.pop()
        return;
    }

    posicion.push(i)
    posicion.push(j)
    let pos = posicion.slice()
    camino.push(pos)
    path.push(`[${i},${j}]`);
    //derecha
    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N)) {
        if(matriz[i][j+1] === 0 && getCamino(path,`[${i},${j+1}]`, `[${i},${j+1}]`) === false) {
            posicion.pop()
            posicion.pop()
            findPaths(matriz, path, i, j + 1, salida, caminos, posicion, camino);
        }
    }
