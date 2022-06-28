import numpy as np


def loadMatrix():  # cargo el archivo que contiene la matriz del laberinto
    matriz = np.loadtxt('input.txt', skiprows=0)
    return matriz


def buscarEntrada(matriz, contador):  # busco la entrada que siempre esta en la primera columna [0]
    valor = matriz[contador][0]
    return contador if valor == 0 else buscarEntrada(matriz, contador + 1)


def buscarSalida(matriz, contador): # busco la salida que siempre estara en la ultima columna
    valor = matriz[contador][-1]
    return contador if valor == 0 else buscarSalida(matriz, contador + 1)


def encontrar_camino(mat, inicio, final, visitada, path, paths):

    if inicio == final:
        paths.append(path[:])  # agrega una copia del camino actual
        return

    # marca la celda de inicio como visitada
    N = len(mat)
    x, y = inicio
    visitada[x][y] = 1

    # si la celda actual es valida entra
    if celda_valida(x, y, N) and mat[x][y]:

        # si las celdas no estan visitadas

        if x + 1 < N and (not (visitada[x + 1][y] != 0)):  #me muevo a la derecha
            path.append((x + 1, y))
            encontrar_camino(mat, (x + 1, y), final, visitada, path, paths)
            path.pop()

        if x - 1 >= 0 and (not (visitada[x - 1][y] != 0)):  # me muevo a la izquierda
            path.append((x - 1, y))
            encontrar_camino(mat, (x - 1, y), final, visitada, path, paths)
            path.pop()

        if y + 1 < N and (not (visitada[x][y + 1] != 0)):  # me muevo hacia arriba
            path.append((x, y + 1))
            encontrar_camino(mat, (x, y + 1), final, visitada, path, paths)
            path.pop()

        if y - 1 >= 0 and (not (visitada[x][y - 1] != 0)): #me muevo hacia abajo
            path.append((x, y - 1))
            encontrar_camino(mat, (x, y - 1), final, visitada, path, paths)
            path.pop()


    # desmarco la celda actual como visitada
    visitada[x][y] = 0

    return paths


def find_paths(mat, inicio, final):  # busca rutas

    N = len(mat)  # calculo el tamaño de la matriz de n*n


    # matriz llena de ceros que se ocupa para mantener las celdas de los caminos actuales
    visitada = np.zeros((N, N))

    path = [inicio]
    paths = []
    paths = encontrar_camino(mat, inicio, final, visitada, path, paths)

    return paths

# Funcion que verifica si la celda es valida
def celda_valida(x, y, N):
    if x < 0 or y < 0 or x >= N or y >= N:
        return False

    return True