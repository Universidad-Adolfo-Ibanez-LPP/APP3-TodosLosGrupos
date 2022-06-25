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
    // meto la pos actual como parte del camino
    path.push(`[${i}, ${j}]`);



    if(v == 2 ){//Se movio hacia abajo
        // muevo un lugar a la derecha
        if (((i >= 0) && (i < M) && (j + 1 >= 0) && (j + 1 < N) && (mat[i][j + 1] == 0)) && !path.includes(`[${i}, ${j + 1}]`)) {
            findPaths(mat, path, i, j + 1, k, 0);
        }
    

        // muevo un lugar abajo
        if (((i + 1 >= 0) && (i + 1 < M) && (j >= 0) && (j < N) && (mat[i + 1][j] == 0)) && !path.includes(`[${i + 1}, ${j}]`)) {
            findPaths(mat, path, i + 1, j, k, 2);
        }

        //muevo un lugar a la izquierda
        if (((i >= 0) && (i < M) && (j - 1 >= 0) && (j - 1 < N) && (mat[i][j - 1] == 0)) && !path.includes(`[${i}, ${j - 1}]`)) {
            findPaths(mat, path, i, j - 1, k, 1);
        }
    
        
    }
    else if(v == 3){//Se movio hacia arriba
        // muevo un lugar a la derecha
        if (((i >= 0) && (i < M) && (j + 1 >= 0) && (j + 1 < N) && (mat[i][j + 1] == 0)) && !path.includes(`[${i}, ${j + 1}]`)) {
            findPaths(mat, path, i, j + 1, k, 0);
        }
    
        //muevo un lugar a la izquierda
        if (((i >= 0) && (i < M) && (j - 1 >= 0) && (j - 1 < N) && (mat[i][j - 1] == 0)) && !path.includes(`[${i}, ${j - 1}]`)) {
            findPaths(mat, path, i, j - 1, k, 1);
        }
        //muevo un lugar arriba 
        if (((i >= 0) && (i < M) && (i-1)>=0 && (j - 1 >= 0) && (j - 1 < N) && (mat[i - 1][j] == 0)) && !path.includes(`[${i - 1}, ${j}]`)) {
            findPaths(mat, path, i - 1, j, k, 3);
        }
    }
    else if(v == 1 ){//Se movio hacia izquierda
        // muevo un lugar abajo
        if (((i + 1 >= 0) && (i + 1 < M) && (j >= 0) && (j < N) && (mat[i + 1][j] == 0)) && !path.includes(`[${i + 1}, ${j}]`)) {
            findPaths(mat, path, i + 1, j, k, 2);
        }

        //muevo un lugar a la izquierda
        if (((i >= 0) && (i < M) && (j - 1 >= 0) && (j - 1 < N) && (mat[i][j - 1] == 0)) && !path.includes(`[${i}, ${j - 1}]`)) {
            findPaths(mat, path, i, j - 1, k, 1);
        }
        //muevo un lugar arriba 
        if (((i >= 0) && (i < M) && (i-1)>=0 && (j - 1 >= 0) && (j - 1 < N) && (mat[i - 1][j] == 0)) && !path.includes(`[${i - 1}, ${j}]`)) {
            findPaths(mat, path, i - 1, j, k, 3);
        }

    }
    else if(v == 0){//Se movio hacia la derecha
        // muevo un lugar a la derecha
        if (((i >= 0) && (i < M) && (j + 1 >= 0) && (j + 1 < N) && (mat[i][j + 1] == 0)) && !path.includes(`[${i}, ${j + 1}]`)) {
            findPaths(mat, path, i, j + 1, k, 0);
        }
    
        //muevo un lugar arriba 
        if (((i >= 0) && (i < M) && (i-1)>=0 && (j - 1 >= 0) && (j - 1 < N) && (mat[i - 1][j] == 0) && (i-1)>=0) && !path.includes(`[${i - 1}, ${j}]`)) {
            findPaths(mat, path, i - 1, j, k, 3);
        }

        // muevo un lugar abajo
        if (((i + 1 >= 0) && (i + 1 < M) && (j >= 0) && (j < N) && (mat[i + 1][j] == 0)) && !path.includes(`[${i + 1}, ${j}]`)) {
            findPaths(mat, path, i + 1, j, k, 2);
        }
    }
    // muevo un lugar a la derecha
    //console.log(path);
    path.pop();
}
