// al igual que el ejemplo del for lo vamos hacer con while

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludar(estudiante) {
    console.log(`hola, ${estudiante}`);    
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludar(estudiante)
}

//otra forma del whilen es 

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludar(estudiante) {
    console.log(`hola, ${estudiante}`);    
}

var contador = 0;

while (contador < estudiantes.length) {
    console.log(estudiantes);
    saludar(estudiantes[contador]);
    contador++;
}