// Propagación en objetos

const user = {username: 'lmaster', age: 33, country: 'CO'};
const {username, ...values } = user;
console.log(username);
console.log(values);

