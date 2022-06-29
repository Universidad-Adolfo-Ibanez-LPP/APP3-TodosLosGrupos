var _= require('underscore');
const {writeFileSync, readFileSync, promises: fsPromises} = require('fs');


//Lectura del archivo
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arreglo_str = contents.split(/ |\r\n/);

    let filas_lenght = contents.split("\n");
    let filas_lenghta = filas_lenght[0].split(" ").length;


    const arreglo= arreglo_str.map(numerico);

    return _.chunk(arreglo,filas_lenghta);
}
function syncWriteFile(caminos){
    writeFileSync("output.txt", JSON.stringify(caminos));}

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


function entrada(matriz,a){


    //Obtenemos la primera columna
    let columna_entrada = matriz.map(col => col[0]);

    //Retornamos el numero de la fila respectiva.

    res = _.findIndex(columna_entrada, function (numero_fila) {
        return numero_fila === a
        }
    );


    return res;

}




let caminos = [];
function buscar_caminos(mat,path,i,j){



    //Filas y Columnas
    let M = mat.length;
    let N = mat[0].length;

    if (j === N-1){

        path.push([i,j]);
        caminos.push(path.map(x => x));
        console.log(path);
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


//Obtenemos la matriz correspondiente
var matriz = syncReadFile('./app3.txt')



//Buscamos la entrada

//En x varia ya que es la fila
let x = entrada(matriz,0);

//La columna siempre se mantendra en 0, ya que es la entrada.
let y = 0
var path =  [];




buscar_caminos(matriz,path,x,y);


syncWriteFile(caminos);













