function  marcar_final(tablero){
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