const fs = require('fs');
// Se marcará el inicio del laberinto con un 2
function marcar_inicio(tablero){
    let flag = true;
    tablero.forEach(function(tabla){
        if(flag === true && tabla[0]=== 0){
            tabla[0] = 2;
            flag = false;
        }
    });
    return tablero;
}
// Se marcará el final del laberinto con un 3
function  marcar_final(tablero){
    let flag = true;
    tablero.forEach(function(tabla){
        if(flag === true && tabla[tabla.length-1]=== 0){
            tabla[tabla.length-1] = 3;
            flag = false;
        }
    });
    return tablero;
}
// Se ejecutara esta funcion de manera recursiva hasta completar el laberinto
function recursividad(tablero,x,y,recorrido,final_path){
    //Primero chequeamos si tenemos un 3 en las posiciones adyacentes para llegar a la meta
    // Derecha
    if(y+1 < tablero[0].length){
        if(tablero[x][y+1]===3){
            recorrido.push([x,y+1]);
            recorrido.forEach(function(valor){
                final_path.push(valor)
            })
            return;
        }
    }
    // Abajo
    if(x+1 < tablero.length){
        if(tablero[x+1][y]===3){
            recorrido.push([x+1,y]);
            recorrido.forEach(function(valor){
                final_path.push(valor)
            })
            return;
        }
    }
    //Arriba
    if(x-1 <= tablero.length){
        if(tablero[x-1][y]===3){
            recorrido.push([x-1,y]);
            recorrido.forEach(function(valor){
                final_path.push(valor)
            })
            return;
        }
    }
    //Izquierda
    if(y-1 <= tablero[0].length){
        if(tablero[x][y-1]===3){
            recorrido.push([x,y-1]);
            recorrido.forEach(function(valor){
                final_path.push(valor)
            })
            return;
        }
    }
    //Luego revisamos si hay un espacio con un 0 en las posiciones adjacentes para así avanzar a este
    // Derecha
    if(y+1 < tablero[0].length){
        if(tablero[x][y+1]===0 && !tablero[x][y+1]){
            recorrido.push([x,y+1]);
            tablero[x][y+1] = 2;
            recursividad(tablero,x,y+1,recorrido,final_path);
        }
    }
    // Abajo
    if(x+1 < tablero.length){
        if(tablero[x+1][y]===0 && !tablero[x+1][y]){
            recorrido.push([x+1,y]);
            tablero[x+1][y] = 2;
            recursividad(tablero,x+1,y,recorrido,final_path);
        }
    }
    //Arriba
    if(x-1 <= tablero.length){
        if(tablero[x-1][y]===0 && !tablero[x-1][y]){
            recorrido.push([x-1,y]);
            tablero[x-1][y] = 2;
            recursividad(tablero,x-1,y,recorrido,final_path);
        }
    }
    //Izquierda
    if(y-1 <= tablero[0].length){
        if(tablero[x][y-1]===0 && tablero[x][y-1]){
            recorrido.push([x,y-1]);
            tablero[x][y-1] = 2;
            recursividad(tablero,x,y-1,recorrido,final_path);
        }
    }
    return final_path;
}
// Ahora leeremos el archivo "input.txt" y lo transformamos en un array de arrays
let txt = fs.readFileSync('input.txt', 'utf8',);
let lines  = txt.trim().split(/\n/).map(row => row.split(/\s/));
lines[lines.length-1].push("");
let laberinto = lines.map(row => row.map(bit => +bit));
laberinto.forEach(function (pos){
    pos.pop();
});
laberinto = marcar_inicio(laberinto);
laberinto = marcar_final(laberinto)
//Ahora encontramos la posicion inicial del laberinto
let posicion_inicial = []
let temp_num = 0;
// Primero encontramos el priner index del inicio
laberinto.forEach(function(lab){
    if(lab[0]=== 2){
        posicion_inicial.push(temp_num)
    }
    temp_num+= 1;
});
// Como sabemos que el inicio está siempre a lo mas a la izquierda, su segundo indice será siempre 0
posicion_inicial.push(0);
// Creamos variables de posicion para simplificar la lectura del codigo:
let x = posicion_inicial[0]; //2
let y = posicion_inicial[1]; //0
let lista_recorrido = [];
lista_recorrido.push(posicion_inicial);
let path = []
let archivo_salida = recursividad(laberinto,x,y,lista_recorrido,path);
const archivo_final = JSON.stringify(archivo_salida);
console.log(archivo_final);
fs.writeFile("output.txt",archivo_final,err => {
});