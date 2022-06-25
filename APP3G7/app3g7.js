/**
 * Esta funcion encuentra todos los caminos posibles
 * moviendose en cuatro direcciones: arriba, abajo, izquierda y derecha
 *
 * @param mat matriz con valores
 * @param path camino posible
 * @param i pos de fila
 * @param j pos de columna
 * @param out array con los caminos posibles
 */


const {readFileSync, promises: fsPromises} = require('fs');
let fs = require('fs');

function find1stPos(mat, n) {
    var fila = n;
    if (mat[fila][0] == 0) {
        return fila;
    } else {
        fila += 1;
        return find1stPos(mat, fila);
    }
}

function findPaths(mat, path, i, j, out) {
    if (path.length === 0) {
        i = find1stPos(mat, 0);
        j = 0;
    }
    // base case
    if (mat == null || mat.length == 0) {
        return;
    }

    //obtengo los extremos de fila y columna
    let M = mat.length;
    let N = mat[0].length;

    // Si llegue al final imprimo el path
    if (j == N - 1) {
        path.push(`[${i},${j}]`);
        console.log(path);
        out.push(`[${path}]`);
        path.pop();
        return;
    }

    // meto la pos actual como parte del camino
    path.push(`[${i},${j}]`);


    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N && mat[i][j + 1] === 0 && !path.includes(`[${i},${j + 1}]`))) {
        findPaths(mat, path, i, j + 1, out);
    }
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N && mat[i + 1][j] === 0) && !path.includes(`[${i + 1},${j}]`)) {
        findPaths(mat, path, i + 1, j, out);
    }
    if ((i - 1 >= 0 && i - 1 < M && j >= 0 && j < N && mat[i - 1][j] === 0) && !path.includes(`[${i - 1},${j}]`)) {
        findPaths(mat, path, i - 1, j, out);
    }
    // else {
    //     if (j === N) {
    //         console.log(path);
    //     }
    // }


    // backtrack: remove the current cell from the path
    path.pop();
}

var path = [];


let x = 0, y = 0;


// leemos el archivo y lo guardamos en una variable
let mat = fs.readFileSync("./input.txt", "utf-8");
mat = mat.split("\n");
mat = mat.map(function (line) {
    return line.split(" ").map(function (num) {
        return parseInt(num);
    }
    );
});

var out = [];

findPaths(mat, path, x, y, out);

console.log("Path:" + " " + out);

// guardamos el resultado en un archivo txt
var file = './output.txt';
fs.writeFile(file, out.toString(), function (err) {
    if (err) {
        console.log(err);
    }
}
);
