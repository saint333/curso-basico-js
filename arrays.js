//sintaxis de un arrays

var frutas = ["manzana","platano","cereza","fresa"];

//saber cual es su longuitus del arrays

console.log(frutas.length);

//saldra 4 

//como acceder a cada elemento del arrays

console.log(frutas[0]); //manzana

console.log(frutas[2]); //cereza

//agregar elementos al final del arrays

var masfrutas = frutas.push("uvas");

//eliminar el ultimo elemento del arrays

var ultimo = frutas.pop("uvas");

//agregar un elemento al principo del arrays

var inicio = frutas.unshift("uvas");

//eliminar el primer elemento del arrays

var borrar = frutas.shift("uvas");

//saber la posicion de un elemento en el arrays

var posicion = frutas.indexOf("cereza");
console.log(posicion); // 2

console.log(frutas[2]); // cereza