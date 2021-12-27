var articulos = [
    {nombre: "libro", costo: 320},
    {nombre : "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifono", costo: 1700},
];

//filter - nos crea un nuevo arrays pero modifica el anterior
var articulosfiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//map- sirve para mapear una arrays y retorna un arrays con lo que queremos que encontrara 
var nombres = articulos.map(function(articulo){
    return articulo.nombre
});

// para utilizar cada uno de los metodos se crea una funcion para que realizen lo que queremos