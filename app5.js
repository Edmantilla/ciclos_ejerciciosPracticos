// Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
// de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
// compra y aplicar un descuento del 10% si el valor supera los $100.000.

let totalCompra = 0;
let continuarCompra;
do {
    let precioArticulo = parseFloat(prompt("Ingrese el precio del artículo a comprar:"));
    totalCompra += precioArticulo;
    continuarCompra = prompt("¿Desea agregar otro artículo? (s/n)").toLowerCase();
} while (continuarCompra === 's');

if (totalCompra > 100000) {
    let descuento = totalCompra * 0.10;
    totalCompra -= descuento;
    console.log(`Se ha aplicado un descuento de $${descuento.toFixed(2)}.`);
}
console.log(`El total de su compra es: $${totalCompra.toFixed(2)}.`);
