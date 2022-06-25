/**
 
 * @param mat matriz con valores
 * @param path camino posible
 * @param i pos de fila
 * @param j pos de columna
 * @param k indica si se esta moviendo hacia arriba o hacia abajo
 * @param array array con los posibles caminos
 * @param out lista con los posibles caminos
 * @returns array con los posibles caminos
 */




 function start(x, mat, o) {
    //console.log(x +".")
    if ((mat[x][0] == 0)) {
        return x;

    }
    else if ((mat[x][0] == 1)) {
        return start(x + 1, mat, o);
    }
    o = -1;
    //console.log(x);
    //return x + start(x+1, mat, o);
}
function findPaths(mat, path, i, j, k, v) {
    // base case
    if (mat == null || mat.length == 0) {
        return;
    }

    //obtengo los extremos de fila y columna
    let M = mat.length;
    let N = mat[0].length;




    // Si llegue al final imprimo el path
    if (j == N - 1) {
        path.push(`[${i}, ${j}]`);
        console.log(path);
        k.push(`[${path}]`);
        // console.log(k);
        path.pop();
        return;
    }
