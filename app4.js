// Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y
// determina, mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para
// ingresar los datos de manera ordenada.

const totalEstudiantes = 5;

for (let i = 1; i <= totalEstudiantes; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i} (0.0 - 5.0):`));
    if (nota < 0.0 || nota > 5.0) {
        console.log("Nota inválida. Por favor ingrese una nota entre 0.0 y 5.0.");
        i--; // Repetir la iteración para el mismo estudiante
        continue;
    }
    if (nota >= 3.0) {
        console.log(`El estudiante ${i} ha aprobado con una nota de ${nota}.`);
    } else {
        console.log(`El estudiante ${i} ha reprobado con una nota de ${nota}.`);
    }
}