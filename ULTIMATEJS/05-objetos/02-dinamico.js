const user = { id: 1};

user.name = "Leonardo";
user.guardar = function () {
    console.log("Guardando", user.name);
}

user.guardar();
delete user.guardar;
delete user.name;
console.log(user);

const user2 = Object.freeze({ id: 1});
user2.name = "Leonardo";
console.log(user2);