// Nos va devolver un arreglo con las propiedades enumerables de un objeto

const countries = {MX : 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru' };

// Obtenemos los valores y no las llaves
console.log(Object.values(countries));