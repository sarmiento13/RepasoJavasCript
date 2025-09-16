/*  
1. crear un programa, haciendo uso de una funcion un contador de vocales,
la funcion debera recibir un texto y la vocal a buscar y retornar la cantidad
de veces que se encuentra dicha vocal.
hacer uso de los metodos para strings
*/
function contarVocal(texto, vocal) {
    texto = texto.toLowerCase();
    vocal = vocal.toLowerCase();
    return texto.split(vocal).length - 1;
}
console.log(contarVocal("Hola Mundo", "o"));

/*
2. crear un programa que haciendo uso de una funcion pueda recibir una lista
de amigos y que retorne otra lista pero con los nombres en mnayuscula 
*/
function amigosEnMayuscula(lista) {
    return lista.map(nombre => nombre.toUpperCase());
}
console.log(amigosEnMayuscula(["bretmer", "erick", "flor", "ana"]));