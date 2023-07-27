//  la declaracion async define una funcion asincrona, la cual devuelve un objeto AsyncFunction

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');