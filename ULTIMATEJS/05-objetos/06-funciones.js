function User(id, name, lastName, age, country) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
};

console.log(User.name)
console.log(User.length)

const U = User
let user = new U (1, "Leonardo", "Sanchez", 23, "Venezuela")

console.log(user)

function of(Fn, arg) {
    return new Fn(arg);
}

let user2 = of(User, 2)
console.log(user2)

function returned() {
    return function () {
        console.log("Hola");
    }
};

let saludo = returned()
saludo()