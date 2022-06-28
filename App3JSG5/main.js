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
        fs.writeFile('output.txt', JSON.stringify(caminos), function (err) {
            if (err) {
                console.error('\x1b[31m', 'No se pudo ejecutar la aplicacion');
            }
        });
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
        posicion.pop()
        posicion.pop()
        camino.pop()
        return caminos;
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
    //izquierda
    if ((i >= 0 && i < M && j - 1 >= 0 && j - 1 < N)) {
        if(matriz[i][j-1] === 0 && getCamino(path,`[${i},${j-1}]`, `[${i},${j-1}]`) === false) {
            posicion.pop()
            posicion.pop()
            findPaths(matriz, path, i, j - 1, salida, caminos, posicion, camino);
        }
    }
    //abajo
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N)) {
        if(matriz[i+1][j] === 0 && getCamino(path,`[${i+1},${j}]`, `[${i+1},${j}]`) === false) {
            posicion.pop()
            posicion.pop()
            findPaths(matriz, path, i + 1, j, salida, caminos, posicion, camino);
        }
    }
    //arriba
    if ((i - 1 >= 0 && i - 1 < M && j >= 0 && j < N)) {
        if(matriz[i-1][j] === 0 && getCamino(path,`[${i-1},${j}]`, `[${i-1},${j}]`) === false) {
            posicion.pop()
            posicion.pop()
            findPaths(matriz, path, i - 1, j, salida, caminos, posicion, camino);
        }
    }
    // backtrack: remove the current cell from the path
    posicion.pop()
    posicion.pop()
    camino.pop()
    path.pop();
}
function getCamino(caminos, camino, camino_buscar) {
    return caminos.some(function (camino) {
        return camino === camino_buscar;
    })
}
function EntradaYSalida(matriz, permiso) {
    if(permiso === 0) {
        let puntoEntrada = 0
        const PosicionEntrada = () => new Promise((resolve) => {
            if ((puntoEntrada * matriz.length) % matriz.flat(1).length === 0 && matriz.flat(1)[puntoEntrada] === 0) {
                resolve(puntoEntrada)
            } else {
                puntoEntrada++;
                resolve(PosicionEntrada());
            }
        });
        PosicionEntrada().then(() => {return puntoEntrada})
        return puntoEntrada
    }
    else {
        let puntoSalida = 0
        const PosicionSalida = () => new Promise((resolve) => {
            if (((puntoSalida + 1) * matriz.length) % matriz.flat(1).length === 0 && matriz.flat(1)[puntoSalida] === 0) {
                resolve(puntoSalida)
            } else {
                puntoSalida++;
                resolve(PosicionSalida());
            }
        });
        PosicionSalida().then(() => {return puntoSalida})
        return puntoSalida
    }
}
