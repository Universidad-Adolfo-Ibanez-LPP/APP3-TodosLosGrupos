var _= require('underscore');
const {writeFileSync, readFileSync, promises: fsPromises} = require('fs');


//Lectura del archivo
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arreglo_str = contents.split(/ |\r\n/);
    const arreglo= arreglo_str.map(numerico);
    return _.chunk(arreglo,5);
}

//Escribir el archivo de salida
function syncWriteFile(caminos){
    writeFileSync("output.txt", JSON.stringify(caminos));
}

function comparar(array,posicion){

    res = _.some(array,function(x){
            return _.isEqual(x,posicion);
        }
    );

    return res;

}

function numerico(x){
    return parseInt(x, 10);
}

let caminos = [];
function buscar_caminos(mat,path,i,j){

    //Filas y Columnas
    let M = mat.length;
    let N = mat[0].length;

    if (i === M-2 && j === N-1) {
        path.push([i,j]);
        caminos.push(path.map(x => x));
        path.pop();
        return;
    }

    //Agregamos al path la posicion
    path.push([i,j]);

    // muevo un lugar a la derecha
    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N && mat[i][j+1]===0 && comparar(path,[i,j+1]) === false)){
        buscar_caminos(mat, path, i, j + 1);
    }

        // muevo un lugar a la izquierda
    if ((i >= 0 && i < M && j - 1 >= 0 && j -1 < N && mat[i][j-1]===0 && comparar(path,[i,j-1]) === false)){
        buscar_caminos(mat, path, i, j -1 );
    }


    // muevo un lugar abajo.
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N && mat[i+1][j]===0 && comparar(path,[i+1,j]) === false)){
        buscar_caminos(mat, path, i + 1, j);
    }

    // muevo un lugar arriba.

    if((i-1>=0 && i-1 < M && j >= 0 && j < N && mat[i-1][j]===0 && comparar(path,[i-1,j])=== false)){
        buscar_caminos(mat,path,i-1,j);
    }


    path.pop();
    // backtrack: remove the current cell from the path
}

const files = process.argv.slice(2);

//Obtenemos la matriz correspondiente
var matriz = syncReadFile(files[0])

let x = 2, y = 0;
var path =  [];

buscar_caminos(matriz,path,x,y);
syncWriteFile(caminos);