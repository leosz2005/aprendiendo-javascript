let edad1 = 16;

if (edad1 >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

function devuelveEdad(edad){
    return edad
}

if (devuelveEdad(25) >= 18) {
    console.log("Eres mayor de edad");
} else if (edad > 13) {
    console.log("El menor debe ir acompañado de sus padres");
} else {
    console.log("Eres menor de edad");
}