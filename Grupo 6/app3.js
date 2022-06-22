var _= require ('underscore')

function findPaths( mat, path,  i, j) {
    // base case
    if (mat == null || mat.length == 0) {
        return;
    }

    let M = mat.length;
    let N = mat[0].length;

    // if the last cell is reached, print the route
    if (j === N - 1) {
        path.push([i,j]);
        `funcion que agregue el camino actual al archivo de texto que se va a exportar`
        console.log(path);
        path.pop();
        return;
    }

    // include the current cell in the path
    path.push([i,j]);

    // move right
    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N `&& funcion que verifique que la casilla a la que va (j+1) sea un 0`)) {
        if (`funcion que vea que la casilla a avanzar (j+1) no este dentro del camino ya transitado`===false){
            findPaths(mat, path, i, j + 1);
        }
    }
    // move down
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N `&& funcion que verifique que la casilla a la que va (i+1) sea un 0`)) {
        if (`funcion que vea que la casilla a avanzar (i+1) no este dentro del camino ya transitado`===false){
            findPaths(mat, path, i + 1, j);
        }
    }
    // move up
    if ((i-1 >= 0 && i-1 > -1 && j >= 0 && j < N `&& funcion que verifique que la casilla a la que va (i-1) sea un 0`)) {
        if (`funcion que vea que la casilla a avanzar (i-1) no este dentro del camino ya transitado`=== false) {
            findPaths(mat, path, i - 1, j);
        }
    }
    // move left
    if ((i === 0 && i + 1 < M && j-1 === 0 && j-1 > -1`&& funcion que verifique que la casilla a la que va (j-1) sea un 0 `)) {
        if (`funcion que vea que la casilla a avanzar (j-1) no este dentro del camino ya transitado`===false){
            findPaths(mat, path, i, j - 1);
        }
    }


    // backtrack: remove the current cell from the path
    path.pop();
}


`let mat= funcion que lea un archivo como matriz`
let mat =[ [ 1, 0, 0, 0, 1 ],
           [ 1, 0, 1, 0, 1 ],
           [ 0, 0, 1, 0, 1 ],
           [ 1, 0, 0, 0, 0 ],
           [ 1, 0, 0, 0, 1 ]];

let path =  [];

`let x= funcion que deje a x en la posicion de la unica fila en la cual puede haber un 0 en la primera columna`
let y=0;
let x = 2

findPaths(mat, path, x, y);