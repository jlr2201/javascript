/* PROMISE: 
El objeto Promise (Promesa) es usado para computaciones asincronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca.
*/

// Estructura de una promesa:

const promise = new Promise(function(resolve, reject) {
    resolve('hey')
});

const cows = 9;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject ("There is no cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));