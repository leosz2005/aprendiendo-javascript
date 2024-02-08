/**
 * Nombre: ancho x alto
 * 8K 7680x4320
 * 4k 3840x2160
 * 2k 2560x1440
 * FHD 1920x1080
 * HD 1280x720
 */

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return "8K"
    } else if (ancho >= 3840 && alto >= 2160) {
        return "4K"
    } else if (ancho >= 2560 && alto >= 1440) {
        return "2k"
    } else if (ancho >= 1920 && alto >= 1080) {
        return "FHD"
    } else if (ancho >= 1280 && alto >= 720) {
        return "hd"
    } else {
        return "Resolución no soportada"
    }
}

console.log("Resolución maxima:", nombreResolucion(8000, 5000));
console.log("Resolución maxima:", nombreResolucion(1920, 512));
console.log("Resolución maxima:", nombreResolucion(100, 0));
console.log("Resolución maxima:", nombreResolucion(1333, 1333));
console.log("Resolución maxima:", nombreResolucion(2500, 720));