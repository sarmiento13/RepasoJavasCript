// crear una funcion que reciba por parametro una lista y un elemento a encontrar retornar si el elemento fue encontardo o no

function buscarElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return "Elemento encontrado";
        }
    }
    return "Elemento no encontrado";
}

console.log(buscarElemento([1, 2, 3, 4], 3));
console.log(buscarElemento(['a', 'b', 'c'], 'd'));

// 