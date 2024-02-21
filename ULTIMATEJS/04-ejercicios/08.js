/**
 * Crear un algoritmo que tome un array de pares
 * y devuelva un array de objetos.
 */

let pares = [
    [1, {name: "Leonardo"}],
    [2, {name: "Graciela"}],
    [3, {name: "Alvaro"}],
]

let array = [
    {
        id: 1,
        name: "Leonardo",
    }, {
        id: 2,
        name: "Graciela",
    }, {
        id: 3,
        name: "Alvaro",
    }
];

function toObjects(arr) {
    let objetos = [];
    for (idx in arr) {
        let elemento = arr[idx];
        objetos[idx] = {
            id: elemento[0],
            name: elemento[1].name
        }
    }
    return objetos
}

console.log(toObjects(pares))