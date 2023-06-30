// Vamos a poder validar y no romper el flujo de la aplicación

const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
};

console.log(users.gndx.country);
console.log(users.bebeloper.country); // Genera error porque no existe
console.log(users?.bebeloper?.country); // Valida y sino existe devuelve undefined