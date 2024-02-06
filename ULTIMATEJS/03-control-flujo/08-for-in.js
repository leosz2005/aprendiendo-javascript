let user = {
    id : 1,
    name : "Leonardo",
    lastName : "Sanchez",
    age : 23,
    country : "Venezuela"
};

for (let prop in user) {
    console.log(prop, user[prop]);
}