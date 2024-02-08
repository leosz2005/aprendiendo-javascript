/**
 * Craer un algortimo que devuelva el número menor
 * y mayor de un arreglo.
 */

let numeros = [55,12,25,100,15,1,250]

function getMinMax(numeros) {
    let menor = numeros[0];
    let mayor = numeros[0];
    for (numero of numeros) {
        if (numero < menor) {
            menor = numero;
        }
        if (numero > mayor) {
            mayor = numero;
        }
    }
    return [menor, mayor];
}

console.log(getMinMax(numeros))