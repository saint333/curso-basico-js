var articulos = [
    {nombre: "libro", costo: 320},
    {nombre : "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifono", costo: 1700},
];

// find - recorre todo el arrays y si es true devuelve un arrays con los datos pero si es false no devuelve nada
var encontrar = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});

//forEach- recorre todo el arrays sin crear uno nuevo y devuelve lo que le pedimos

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some - verifica si existe o no un articulo o lo que queremos saber devuelve true o false

var barato = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
