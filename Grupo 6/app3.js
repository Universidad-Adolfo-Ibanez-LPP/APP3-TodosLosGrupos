var _= require ('underscore')

function validSpot(mat,x,y) {
    return mat[x][y] === 0;
}
function transitado(path,x,y){
    let nuevo=_.filter(path,function (camino) {return _.isEqual(camino,[x,y])})
    return nuevo.length !== 0;

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



let mat =[ [ 1, 0, 0, 0, 1 ],
           [ 1, 0, 1, 0, 1 ],
           [ 0, 0, 1, 0, 1 ],
           [ 1, 0, 0, 0, 0 ],
           [ 1, 0, 0, 0, 1 ]];

let path =  [];


let x = 2, y = 0;

findPaths(mat, path, x, y);