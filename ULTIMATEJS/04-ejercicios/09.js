/**
 * Crear una función que tome un número n
 * y devulva un array que vaya de 1 a n
 */

function array(n) {
    if (n <= 0) {
        return []
    }
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = i + 1
    }
    return array;
}
console.log(array(10))
console.log(array(100))