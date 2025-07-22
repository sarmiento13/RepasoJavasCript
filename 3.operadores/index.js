// operador unarios 
// operador de negacion 
// operador esta a la izquierda del valor y como resultado obtenemos otro valor 
let negacion =!false
// exprecion es un valor complejo que sera solucionado y nos producira o retornara un nuevo valor 
console.log(negacion)

// operadores vinarios 
// son los que evaluan dos valores y nos dan como resultado un nuevo valor
let suma = 10 + 20
let resta = 20 - 10
let multiplicacion = 10 * 20
let division = 20 / 10  
let modulo = 20 % 10 // el resto de la division
let potencia = 2 ** 3 // 2 elevado a la 3
let residuo = 20 % 3 // el residuo de la division
console.log(suma) // 30
// tarea operadores de comparacion 
// Comparan dos valores y devuelven true o false
let mayor = 10 > 5;                // true
let menor = 10 < 5;                // false
let igual = 10 == "10";            // true (compara solo valor)
let estrictamenteIgual = 10 === "10"; // false (compara valor y tipo)
let diferente = 10 != 5;           // true
let estrictamenteDiferente = 10 !== "10"; // true

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente);

// operadores logicos 
// Permiten combinar expresiones booleanas
let and = true && false;           // false
let or = true || false;            // true
let not = !true;                   // false

console.log(and, or, not);

// operadores ternarios
// Permiten tomar decisiones en una sola línea
let edad = 18;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
