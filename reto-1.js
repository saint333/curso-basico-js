//juego de papel piedra y tijera
/*
crear las variables
crear una funcion 
hacer la logica del juego
pasarles los valores y mostrar el resultado
*/

let opcion1 = "piedra";
let opcion2 = "tijera";
let opcion3 = "papel";

function juego(var1 , var2){
    if ((var1 === opcion1 && var2 === opcion1) || (var1 === opcion2 && var2 === opcion2) || (var1 === opcion3 && var2 === opcion3)){
        console.log("esto es un empate");
    }else if ((var1 === opcion1 && var2 === opcion2) || (var1 === opcion2 && var2 === opcion3) || (var1 === opcion3 && var2 === opcion1)){
        console.log("jugador gano");
    }else if ((var1 === opcion1 && var2 === opcion3) || (var1 === opcion2 && var2 === opcion1) || (var1 == opcion3 && var2 === opcion2)){
        console.log("computadora gano");
    }

}

juego("piedra", "papel")
