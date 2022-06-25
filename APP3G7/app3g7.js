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
