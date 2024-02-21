let user1 = {
    id : 1,
    name : "Leonardo",
    lastName : "Sanchez",
    age : 24,
    country : "Venezuela",
    activo : true,
    recuperarClave : function () {
        console.log("Recuperando clave");
    }
};

function crearUser(id, name, lastName, age, country) {
    return {
        id,
        name,
        lastName,
        age,
        country,
        activo : true,
        recuperarClave : function () {
            console.log("Recuperando clave");
        }
    }
}

let user2 = crearUser(2, "Graciela", "Padron", 23, "Venezuela");
let user3 = crearUser(3, "Alvaro", "Padron", 37, "Venezuela");

console.log(user1);
console.log(user2);
console.log(user3);
