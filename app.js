// Mostrar todos los números primos entre 1 y 50
for (let num = 2; num <= 50; num++) {
    let esPrimo = true;

    // Verificar si el número tiene divisores
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break; // No es necesario seguir revisando
        }
    }

    // Si sigue siendo primo, mostrarlo
    if (esPrimo) {
        console.log(num);
    }
}
