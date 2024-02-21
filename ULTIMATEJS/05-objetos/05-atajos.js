let obj = {};
let obj2 = new Object();

/**
 * new Array()
 * new Object()
 * new Function()
 * new Date()
 * new RegExp()
 * new Error()
 * new EvalError()
 * new RangeError()
 * new ReferenceError()
 * new SyntaxError()
 * new TypeError()
 * new URIError()
 */

function User(name, age) {
    this.name = this.name;
    this.age = this.age;
    this.guardar = function () {
        console.log("Guardando", this.name);
    }
}

let user = new User('Leonardo', 23);
console.log(user.constructor);

const s1 = '1+1'
const s2 = new String('1+1')
console.log(eval(s1), eval(s2))