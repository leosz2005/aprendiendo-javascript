function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b
    }
}

function cualEsMayor2(a, b) {
    return a > b ? a : b
}

console.log(cualEsMayor(5, 10));
console.log(cualEsMayor(10, 15));
console.log(cualEsMayor(15, 5));
console.log(cualEsMayor(5, 20));

console.log(cualEsMayor2(5, 10));
console.log(cualEsMayor2(10, 15));
console.log(cualEsMayor2(15, 5));
console.log(cualEsMayor2(5, 20));