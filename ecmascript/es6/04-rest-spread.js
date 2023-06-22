// arrays destructuración

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b); // Es mucho más amigable que hacer mención de la posición.
console.log(a, fruits[1]);

// Object destructuración

let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);


// Operador de propagación
let person = {name: 'Oscar', age: 28};
let country = 'MX';

let data = {id: 1, ...person, country};
console.log(data);

// Parámetros rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3)



