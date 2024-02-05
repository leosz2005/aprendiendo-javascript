// Personaje de TV
let nombre = "Tanjiro Kamado";
let anime = "Demon Slayer";
let edad = 16;

let Personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad,
}
console.log(Personaje)
console.log(Personaje.anime)
console.log(Personaje["edad"])

Personaje.edad = 17;
Personaje["nombre"] = "Tanjiro";

delete Personaje.anime;

console.log(Personaje)