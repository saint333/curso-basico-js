//validaciones por casos

var numero = 1;

switch (numero) { //se pasa el argumento para validar
    case 1://este el caso uno se pone el resultado que piensas que es
        console.log("soy un uno");
        break; // es importante para detener el flujo del programa y salir del switch sino estuviera realizaria todo lo que sigue hasta que termine 
    case 10: // en caso de no ser el primer caso sigue con este 
        console.log("soy un diez");
        break;
    default: // en caso que ninguno sea valido se relaiza el default 
        console.log("no soy nada");
        break;
}