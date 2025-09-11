// es la nueva version de ecma cript6 para la creacion de 
// funciones, el objetibo de esta funcion es facilitar 
// la creacion de funcion y que el codigo sea legible 

const suma=(a,b) => {return a + b};
console.log(suma(10,5));
 const saludoNombre=nombre=>{
    let saludo=`hola ${nombre}`;
    return saludo;
 }
console.log(saludoNombre("willian"));

 const saludo=()=>{
    return "hola";
 }
console.log(saludo());