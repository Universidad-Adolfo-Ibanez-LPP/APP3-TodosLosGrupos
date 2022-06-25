var _= require("underscore");
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) { //Función que lee el archivo.
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/); //Separa el archivo texto por fila.
  return arr;
}
function toNumber(array,i){ //Función que convierte una matriz (matriz de matrices en este caso) de strings en una de números.
  if(array[i]==null){} //Caso base. Si es nulo, se termina la función y retorna null.
  else {
    array[i]= array[i].map(Number); //Toma la primera fila y la convierte en números.
    toNumber(array,i+1); //Se hace lo mismo con la siguiente fila.
  }
  return array; //Retorna el array.
}
