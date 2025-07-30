if (true) {
    let suma= 1 + 2;
    let division = 10 / 2;
    console.log(suma,division);
} else {
    let resta = 5 - 3;
    let multiplicacion = 4 * 2;
    console.log(resta, multiplicacion);
}
// crear un progrmas que evalue si un numero es mayor al otro y si este numero es a la vez un numero par
let firtsNumber=10;
let secondNumber=20;

if (firtsNumber > secondNumber) {
    console.log(`${firtsNumber} es mayor que ${secondNumber}`);
    if (firtsNumber % 2 === 0) {
        console.log(`${firtsNumber} es un numero par`);
    } else {
        console.log(`${firtsNumber} es un numero impar`);
    }
} else{
    console.log()
}
 // crear un programa que me muestre el numero en texto 
let numero = 4;
let texto = "";

if (numero === 1) {
    texto = "uno";
} else if (numero === 2) {
    texto = "dos";
} else if (numero === 3) {
    texto = "tres";
} else if (numero === 4) {
    texto = "cuatro";
} else if (numero === 5) {
    texto = "cinco";
} else {
    texto = "Número fuera de rango";
}

console.log(`El número ${numero} en texto es: ${texto}`);

switch (numero) {
    case 1:
        console.log("uno");
        break;
    case 2:
        console.log("dos");
        break;
    case 3:
        console.log("tres");
        break;
    case 4:
        console.log("cuatro");
        break;
    case 5:
        console.log("cinco");
        break;
    default:
        console.log("Número fuera de rango");
}