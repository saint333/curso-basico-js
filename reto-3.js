//creacion masiva de carros
/* 
crear la funcion crustructora
generar el ciclo para la creacion
imprimir los resultados
*/

let carros = [];

function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio
}

for (let i = 0; i < 30; i++) {
    let marca = prompt("ingresa la marca del auto: ");
    let modelo = prompt("ingresa el modelo del carro: ");
    let anio = prompt("ingrese el año del carro: ");

    carros.push(new auto(marca,  modelo, anio))
}

for (carro of carros) {
    console.log(carro);
}