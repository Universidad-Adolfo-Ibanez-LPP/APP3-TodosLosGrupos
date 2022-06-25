/**
 * Integrantes Grupo 1:
 *
 * Vicente Garay
 * Vicente Garcia
 * Felipe Gonzalez
 * Andrés Guerra
 * Tomas Loyola
 */

/**
 * Parametros a usar en la app
 * @param matrix matriz con valores
 * @param salida array con los caminos posibles
 * @param ruta camino posible
 * @param i pos de fila
 * @param j pos de columna
 */

 const {readFileSync, promises: fsPromises} = require('fs');
 let fs = require('fs');

/*
Funcion que se encarga de leer el archivo .txt de entrada que contiene
el laberinto y mostrarlo por terminal.
*/
function imprimir_laberinto(archivo){
  
  fs.readFile(archivo, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  });

}
/*
Funcion recursiva que encuentra la posicion inicial(Entrada)
Busca el primer 0 en la matrixriz, de la primera fila a la ultima
Retorna la posicion de la fila.
*/
function Encontrar_primera_posicion(matrix, n) {
    var fila = n;
    if (matrix[fila][0] == 0) {
        return fila;
    } else {
        fila = fila + 1;
        return Encontrar_primera_posicion(matrix, fila);
    }
}

/*
Funcion encargada de recorrer la matrixriz que es pasada como
parametro junto con las coordenadas, para asi encontrar las
posibles soluciones al laberinto.
*/
function Encontrar_rutas(matrix, ruta, i, j, salida) {
    if (ruta.length === 0) {
        i = Encontrar_primera_posicion(matrix, 0);
        j = 0;
    }
    // base case
    if (matrix == null || matrix.length == 0) {
        return;
    }

    //obtengo los extremos de fila y columna
    let M = matrix.length;//Largo
    let N = matrix[0].length;//Ancho

    // Si llegue al final imprimo el ruta
    if (j == N - 1) {
        ruta.push(`[${i},${j}]`);
        salida.push(`[${ruta}]`);
        ruta.pop();
        return;
    }

    // meto la pos actual como parte del camino
    ruta.push(`[${i},${j}]`);

    //Movientos posibles

    //Movimiento hacia abajo
    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N && matrix[i][j + 1] === 0 && !ruta.includes(`[${i},${j + 1}]`))) {
        Encontrar_rutas(matrix, ruta, i, j + 1, salida);
    }
    //Movimiento hacia arriba
    if ((i >= 0 && i < M && j - 1 >= 0 && j - 1 < N && matrix[i][j - 1] === 0 && !ruta.includes(`[${i},${j - 1}]`))) {
        Encontrar_rutas(matrix, ruta, i, j - 1, salida);
    }
    //Movimiento hacia la derecha
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N && matrix[i + 1][j] === 0) && !ruta.includes(`[${i + 1},${j}]`)) {
        Encontrar_rutas(matrix, ruta, i + 1, j, salida);
    }
    //Movimiento hacia la izquierda
    if ((i - 1 >= 0 && i - 1 < M && j >= 0 && j < N && matrix[i - 1][j] === 0) && !ruta.includes(`[${i - 1},${j}]`)) {
        Encontrar_rutas(matrix, ruta, i - 1, j, salida);
    }
    ruta.pop();
}

/*
Funcion que se encarga de guardar la informacion contenida
en la variable salida en un archivo de texto que lleva
por nombre output.txt
*/
function Guardar_rutas(file){

    fs.writeFile(file, salida.toString(), function (err) {
        if (err) {
            console.log(err);
        }
    });

}

var ruta = [];

/*
Variables que contienen las cordenadas de inicio,
es decir, la casilla inicial de la cual se partira en
el laberinto, para este caso se parte en la casilla (0,0).
La x representa la Fila y la y representa la columna.
*/
let x = 0, y = 0;

let archivo = "input.txt";//Variable que almacena el nombre del archivo de entrada.

/*
open txt file and read the matrixrix
Se abre el archivo .txt pasado como parametro y se inicializa
la variable matrix con la informacion contenida en el archivo .txt
*/
let matrix = fs.readFileSync(archivo, "utf-8");
matrix = matrix.split("\n");
matrix = matrix.map(function (line) {
    return line.split(" ").map(function (num) {
            return parseInt(num);
        }
    );
});

/*
Declararion de la variable salida,
la cual es una variable de tipo array
que almacena las soluciones al laberinto.
*/
var salida = [];







