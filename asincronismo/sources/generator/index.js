// Generators: Permite trabajar con una función generator para realizar llamados o detener las solicitudes que hagamos
// Permite pausar y retomar

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);



function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());