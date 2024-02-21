/**
 * Crear un algoritmo que tome un array de objetos
 * y devuelva un array de pares clave-valor.
 */

let array = [{
    id: 1,
    name: "Leonardo",
}, {
    id: 2,
    name: "Graciela",
}, {
    id: 3,
    name: "Alvaro",
}];

let pares = [
    [1, {id: 1, name: "Leonardo"}],
    [2, {id: 2, name: "Graciela"}],
    [3, {id: 3, name: "Alvaro"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];

    }
    return pairs
}

let resultado = toPairs(array);
console.log("El array de pares es: ", resultado)
console.log("El array de pares es: ", pares)