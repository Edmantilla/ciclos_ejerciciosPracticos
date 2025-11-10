// Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
// 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
// acierta, mostrar “Bienvenido”.

const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";
let intentos = 0;
const maxIntentos = 3;
let accesoConcedido = false;

while (intentos < maxIntentos) {
    let usuarioIngresado = prompt("Ingrese su usuario:");
    let contrasenaIngresada = prompt("Ingrese su contraseña:");
    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
        console.log("¡Bienvenido!");
        accesoConcedido = true;
        break;
    } else {
        intentos++;
        console.log(`Credenciales incorrectas. Intento ${intentos} de ${maxIntentos}.`);
    }
}

if (!accesoConcedido) {
    console.log("Acceso denegado.");
}