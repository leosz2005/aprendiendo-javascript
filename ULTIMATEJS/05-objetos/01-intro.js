let email = 'leonardosanchezzerlin2005@gmail.com';
let name = 'Leonardo';
let direccion = {
    calle: 'Calle 1',
    numero: 123,
}

let user = {
    email: 'leonardosanchezzerlin2005@gmail.com',
    name: 'Leonardo',
    direccion: {
        calle: 'Calle 1',
        numero: 123
    },
    activo: true,
    recuperarPassword: function () {
        console.log('Recuperando password');
    }
}
console.log(user)