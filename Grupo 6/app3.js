var _= require ('underscore')
const fs=require("fs"); //PARA LEER EL ARCHIVO 
fs.readFile(__dirname+"/input.txt",main) //PARA LEER EL ARCHIVO 

function main(error, data) { //Para pasar los números a una matriz
    if(error) {
        throw error;
    }

    let contents = data.toString();
    let filas = contents.split("\n");
    let i = filas.length
    let j = filas[0].split(" ").length
    let mat;
    mat = _.map(filas, (fila)=>{
            let numbersTextForm = fila.split(" ");
            let numbers = _.map(numbersTextForm, (number)=>{
                return parseInt(number)
            })
            return numbers;
        }
    )
    var path =  [];

    //como la entrada siempre será un 0 en la primera columna y solo puede haber una entrada su busqueda se simplifica
    let y=0
    let x = findentrance(mat,0);


    write("[\n")
    findPaths(mat, path, x,y);
    write("]");

}

function findentrance(mat,number){ //FUNCION QUE SELECCIONA LA ENTRADA DEL LABERINTO
    let col0 = mat.map(d => d[0]);
    return _.findIndex(col0, function (fila) {
        return fila === number
    });
}


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
        write(JSON.stringify(path)+",\n",)
        console.log(path);
        path.pop();
        return;
    }

    // include the current cell in the path
    path.push([i,j]);

    // move right
    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N && validSpot(mat,i,j+1)===true)) {
        if (transitado(path,i,j+1)===false){
            findPaths(mat, path, i, j + 1);
        }
    }
    // move down
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N && validSpot(mat,i+1,j)===true)) {
        if (transitado(path,i+1,j)===false){
            findPaths(mat, path, i + 1, j);
        }
    }
    // move up
    if ((i-1 >= 0 && i-1 > -1 && j >= 0 && j < N && validSpot(mat,i-1,j)===true)) {
        if (transitado(path,i-1,j) === false) {
            findPaths(mat, path, i - 1, j);
        }
    }
    // move left
    if ((i === 0 && i + 1 < M && j-1 === 0 && j-1 > -1&& validSpot(mat,i,j-1)===true)) {
        if (transitado(path,i,j-1)===false){
            findPaths(mat, path, i, j - 1);
        }
    }
    // backtrack: remove the current cell from the path
    path.pop();
}
function validSpot(mat,x,y) { //Funciones que ven que es un 0 
    return mat[x][y] === 0;
}
//verifica si la celda a la que queremos mover no esta ya en el camino transitado (evitamos darnos vueltas innecesarias)
function transitado(path,x,y){ //Ve que no se haya pasado por aqui
    let nuevo=_.filter(path,function (camino) {return _.isEqual(camino,[x,y])})
    return nuevo.length !== 0;
}

function write(data){
    fs.appendFile(__dirname+"/output.txt", data, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}