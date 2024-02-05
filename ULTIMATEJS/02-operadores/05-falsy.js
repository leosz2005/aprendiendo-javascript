// short-circuit

// Falso
// false
// 0
// ""
// null
// undefined
// NaN

let nombre = "chango";
let username = nombre || "Desconocido";
console.log(username)

function fn1() {
    console.log("soy fn1")
    return false;
}

function fn2() {
    console.log("soy fn2")
    return true;
}

let x = fn1() && fn2();