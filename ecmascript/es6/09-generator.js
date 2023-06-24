// Se usa para iterar, es una función que nos va a vedolver unos valores según el algoritmo definido

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

// Recuerda su estado
const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

