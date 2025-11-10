// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
// fueron pares y cuántos impares.

let contadorPares = 0;
let contadorImpares = 0;
for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i} de 10:`));
    if (numero % 2 === 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}
console.log(`Cantidad de números pares: ${contadorPares}`);
console.log(`Cantidad de números impares: ${contadorImpares}`);
