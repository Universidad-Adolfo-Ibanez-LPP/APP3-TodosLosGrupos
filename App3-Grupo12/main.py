from funciones import *


def main():
    paths = []
    matriz = loadMatrix()  # aqui cargo la matriz

    entrada = buscarEntrada(matriz, 0)  # inicio buscando la posicion de entrada de la matriz
    salida = buscarSalida(matriz, 0)  # inicio buscando la posicion de salida de la matriz

    N = len(matriz)  # busco tamaño

    mat = np.array(matriz)  # se guarda en mat el arreglo de la matriz
    # print(matriz)

    # cambio los unos por ceros y los ceros por unos
    mat[mat == 1] = 2
    mat[mat == 0] = 1
    mat[mat == 2] = 0

    inicio = (entrada, 0)  # inicio del laberinto
    final = (salida, N - 1)  # final del laberinto

    paths = find_paths(mat, inicio, final)  # le entrego a la funcion la matriz, donde comienza y termina
    print("Los caminos encontrados son los siguientes:\n")
    print(paths)  # muestro en pantalla las rutas que se encontraron


if __name__ == "__main__":  # comienza la funcion main y ejecuta el codigo
    main()
