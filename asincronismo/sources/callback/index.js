// Callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2,2, sum));


setTimeout(function (){
    console.log('Hola javascript');
}, 5000)

function grettin (name) {
    console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, 'lmaster')

// Primeras pruebas de callback

