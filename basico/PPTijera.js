const laPC = "ASUS-PC";
let Nombre; 
let miEleccion;
let pcEleccion;
let miPuntaje;
let pcPuntaje;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function miNombre() {
  Nombre = prompt("Digita tu nombre");
  if (Nombre == null || Nombre == ""){
    window.alert("Digite un nombre válido para continuar");
    miNombre();
  } else {
  window.alert(`Hola ${Nombre}, mi nombre es ${laPC} ¡Vamos a jugar!`);
  }
  return Nombre;
}

function elijoYo() {
  i = prompt("Digite 1 para Piedra 2 para Papel y 3 para Tijera");
  if (i == 1) {
    window.alert("Usted eligió Piedra");
  }
  else if (i == 2) {
    window.alert("Usted eligió Papel");
  }
  else if (i == 3) {
    window.alert("Usted eligió Tijera");
  }
  else {
    window.alert("No válido, por favor digite un número del 1 al 3");
    elijoYo();
  }
  miEleccion = i;
  return miEleccion;
}

function eligePC() {
  i = getRandomInt(3) + 1;
  switch (i) {
    case 1:
      window.alert(laPC + " eligió Piedra");
      break;
    case 2:
      window.alert(laPC + " eligió Papel");
      break;
    case 3:
      window.alert(laPC + " eligió Tijera");
      break;
    default:
      window.alert(laPC + " no ha elegido ninguna, Fin del Juego");
  }
  pcEleccion = i;
  return pcEleccion;
}

function resultados() {
  if (miEleccion == pcEleccion) {
    window.alert(`EMPATE, tu puntaje es: ${miPuntaje} ${laPC}: ${pcPuntaje} `);
  } else if ((miEleccion == 1 && pcEleccion == 3) || (miEleccion == 2 && pcEleccion == 1) || (miEleccion == 3 && pcEleccion == 2)) {
      miPuntaje += 1
      window.alert(`GANASTE!!!, tu tienes: ${miPuntaje} ${laPC}: ${pcPuntaje} `);
  } else {
      pcPuntaje += 1
      window.alert(`PERDISTE, tu puntaje es: ${miPuntaje} ${laPC}: ${pcPuntaje} `);
  }
}

function juego() {
  var continuar = true;
  miPuntaje = 0;
  pcPuntaje = 0;
  miNombre();
  while (continuar == true) {
    elijoYo();
    eligePC();
    resultados();
    continuar = confirm("¿Desea continuar?");
  }
  window.alert("Ha terminado el juego");
  window.alert(`${Nombre} ${miPuntaje} - ${laPC} ${pcPuntaje}`);
}
