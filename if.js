var edad = 18;
if (edad === 18) {
    console.log("Pede votar, sera tu primera vez");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

//condicionales ternarios

condicion ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Soy un uno" : "No soy un uno";

// tambien puede hacerse asi 

var resultado = numero;

resultado === 1 ? console.log("uno") : console.log("no soy un uno");