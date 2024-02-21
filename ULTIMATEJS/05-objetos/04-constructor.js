function Usuario(id, name, lastName, age, country, activo) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.activo = activo;

    this.recuperarClave = function () {
        console.log("Recuperando clave");
    }
}

let usuario = new Usuario(1, "Leonardo", "Sanchez", 24, "Venezuela", true);
console.log(usuario)