const anotherFunction = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve('Lo logramos es bien!!!!!!!');
      }  else {
        reject('No se cumplió Paila');
      }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finnally mensaje o lógica que debe suceder cuando se cumple la promesa'));


