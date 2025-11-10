// algoritmo que cuente las letras y si las vocales se repiten o no en una palabra ingresada por el usuario

let palabra = prompt("Ingrese una palabra:");
let contadorLetras = 0;
let vocalesEncontradas = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0};

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i].toLowerCase();
    contadorLetras++;   
    if (vocalesEncontradas.hasOwnProperty(letra)) {
        vocalesEncontradas[letra]++;
    }   
}

console.log(`La palabra "${palabra}" tiene ${contadorLetras} letras.`);

for (let vocal in vocalesEncontradas) {
    if (vocalesEncontradas[vocal] > 0) {
        console.log(`La vocal "${vocal}" se repite ${vocalesEncontradas[vocal]} veces.`);
    } else {
        console.log(`La vocal "${vocal}" no se encuentra en la palabra.`);
    }   
}
