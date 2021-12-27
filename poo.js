//en vez de generar carro por carro utilizamos poo para hacerlo

function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

//generamos a partir de la funcion mas carros 
// new hace referencia que se creara un nuevo objecto basado en un objecto creado en este caso auto

var carro1 = new auto("tesla", "model 3", 2020);
var carro2 = new auto("tesla", "model x", 2018)