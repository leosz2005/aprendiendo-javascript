/**
 * Crear algoritmo que devuelva la cantidad
 * de números pisitivos que hay en un arreglo.
 */
let array = [2, 5, 7, 15, -5, -100, 55]

function positivos(array) {
    let positivos = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positivos++;
        }
    }
    return positivos;
}

console.log("La cantidad de positivos es: ",positivos(array))