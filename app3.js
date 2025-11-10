// Crea un programa que: simule un cajero automático. El usuario inicia con un saldo
// definido en una variable constante. Podrá retirar dinero varias veces mientras tenga
// fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de
// error y no permitir la transacción.

const saldoInicial = 1000; // Saldo inicial del usuario
let saldoActual = saldoInicial;
let continuar;
do {
    let retiro = parseFloat(prompt(`Su saldo actual es $${saldoActual}. ¿Cuánto desea retirar?`));
    if (retiro > saldoActual) {
        console.log("Error: Fondos insuficientes para realizar esta transacción.");
    } else {
        saldoActual -= retiro;
        console.log(`Retiro exitoso. Su nuevo saldo es $${saldoActual}.`);
    }
    continuar = prompt("¿Desea realizar otro retiro? (s/n)").toLowerCase();
} while (continuar === 's');

console.log("Gracias por usar el cajero automático. ¡Hasta luego!");