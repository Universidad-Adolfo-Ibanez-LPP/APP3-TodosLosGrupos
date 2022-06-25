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



