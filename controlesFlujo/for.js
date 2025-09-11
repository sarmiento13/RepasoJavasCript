/*
sintaxys de for 
primero el keyword, condicion, cuerpo partes de la condicion - expresion inicial, condicion, expresion final
*/
// suma normal inicial=inicial+1
// incremento inicial++
// inicial+=1
for (let inicial=1;inicial<=10;inicial++ ){
    console.log(inicial);
    // console.log(inicial+1); // suma normal
}
// for es usado para iterar sobre un rango de números o elementos en una colección.
let amigos = ['Juan', 'Ana', 'Pedro', 'Luisa'];
console.log(amigos)
console.log(amigos[3])
// existe un metodo para saber la cantidad de elementos que tiene una lista length
console.log(amigos.length) // 4
// para acceder al ultimo elemento podemos hacer uso del metodo lenght y restarle
console.log(amigos[amigos.length - 1]) // Luisa

for (let i = 0; i < amigos.length; i++) {
    console.log(amigos[i]);
}

let frutas = ['🍎', '🍇', '🍒','🍍', '🍈', '🥭'];

for (let i = frutas.length - 3; i < frutas.length; i++) {
    console.log(frutas[i]);
}
for (let i = 0; i < frutas.length; i++) {
    if (i === 0 || i === 3 || i === 5) {
        console.log(frutas[i]);
    }
}
let indices = [0, 3, 5];
for (let i of indices) {
    console.log(frutas[i]);
}