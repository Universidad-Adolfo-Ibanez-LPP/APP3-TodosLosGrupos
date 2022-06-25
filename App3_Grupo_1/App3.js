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




