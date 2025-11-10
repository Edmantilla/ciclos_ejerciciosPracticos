// Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de
// multiplicar hasta el 12. El ciclo debe permitir repetir el proceso si el usuario desea
// consultar otra tabla.

let repetir;

do {
    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 12; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    repetir = prompt("¿Desea consultar otra tabla? (s/n)").toLowerCase();
}   
while (repetir === 's');

