let idAuto = [];
let cantidad;
let continuar;
let autoNuevo;
let marca;
let modelo;
let annio;


function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

function propAutos ()
    {
        marca = prompt("Digite la Marca del auto");
        modelo = prompt("Modelo");
        annio = prompt("Año");
    }


function CrearAutos () {
    continuar = true;
    cantidad = 0;
    while (continuar == true) {
        propAutos();
        autoNuevo = idAuto.push(new auto(marca,modelo, annio));
        cantidad++;
        continuar = confirm("Desea crear un nuevo auto");
    }
    window.alert(`Usted creó ${cantidad} nuevos autos`);
}

