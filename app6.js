// Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
// adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
// programa debe indicar si el número buscado es mayor o menor que el ingresado.

const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
let intento;    
do {
    intento = parseInt(prompt("Adivina el número entre 1 y 20:"));
    if (intento < numeroAleatorio) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else if (intento > numeroAleatorio) {
        console.log("El número es menor. Intenta de nuevo.");
    }
} while (intento !== numeroAleatorio);

console.log(`¡Felicidades! Has adivinado el número ${numeroAleatorio}.`);
