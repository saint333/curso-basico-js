// juego de piedra papel y tijera con switch

let opcion1 = "piedra";
let opcion2 = "tijera";
let opcion3 = "papel";

function juego(var1, var2) {
    switch (true) {
        case (var1 === opcion1 && var2 === opcion1) || (var1 === opcion2 && var2 === opcion2) || (var1 === opcion3 && var2 === opcion3):
            console.log("esto es un empate");
            break;
        case (var1 === opcion1 && var2 === opcion2) || (var1 === opcion2 && var2 === opcion3) || (var1 === opcion3 && var2 === opcion1):
            console.log("jugador gano");
            break;
        case (var1 === opcion1 && var2 === opcion3) || (var1 === opcion2 && var2 === opcion1) || (var1 == opcion3 && var2 === opcion2):
            console.log("computadora gano");
        default:
            console.log("a ocurrido un problema");
            break;
    }
}