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
