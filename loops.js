//ciclo for 

// recorriendo un arrays

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

//definimos la tarea que queremos realizar para ver el funcionamiento

function saludar(estudiante) {
    console.log(`hola, ${estudiante}`);
}

//realizamos el for

for (let i = 0; i < estudiantes.length; i++) {
    saludar(estudiantes[i]);
}

//realizamos el for of .... que trabaja casi similar al anterior

for (var estudiante of estudiantes) {
    saludar(estudiante)
}

// las dos dan el mismo resultado