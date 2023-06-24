// Mejora en objeto literal

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

//Se puede pasar de esta manera si es la misma asignación

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("gndx", 34, "MX", 1));

