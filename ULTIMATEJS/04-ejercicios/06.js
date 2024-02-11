/**
 * Crear algoritmo que devuleva 
 * el precio del producto más impuesto.
 */

function precioCompleto (precio, impuesto) {
    return precio + (precio * (impuesto/100))
}

console.log(precioCompleto(100, 21))
console.log(precioCompleto(100, 10))
console.log(precioCompleto(100, 40))