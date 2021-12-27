//scope

//la variable nombre pertenece al scope global por lo que puede ser accedida desde una funcion
var nombre = "David"; 

//cuando se declara una funcion esta es similar al scope global pero esta se llama scope local 
function my_function(){

    //la variable apellido es de scope local por lo que pertenece unicamente para la funcion
    var apellido = "Granados Elias";
    //en cambio la variable nombre al ser global puede ser llamado dentro de la funcion
    console.log(nombre + " " + apellido)
}

//cuando se intenta llamar a la variable declara dentro de la funcion esta no puede ser accedida
console.log(apellido); // apellido is not undefined