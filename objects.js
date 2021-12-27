//ejemplo de un objecto

var auto = {
    marca: "toyota",
    modelo: "corolla",
    anio: 2020,
    detalledelauto: function () {       
        console.log(`auto ${this.modelo} ${this.anio}`);
    }
    //this hace referencia al objecto 
}

//acceder a una propiedad del objecto

auto.marca // toyota

// acceder a la funcion 

auto.detalledelauto()