/*Arreglos */

//declaracion

const arr=new Array(10);
const arr1=[];

console.log(arr);
console.log(arr1);

const numeros = [1,2,3,4,5];
let colores = ["rojo", "verde", "azul"];

//Ejercicio
let videojuegos = ["Pacman", "Omori", "Undertale"];
console.log(videojuegos[1]);

let arregloCosas = [
    true,
    123,
    "Mateo",
    1+2,
    function(){},
    ()=>{},
    ["S","Peliculas"]
];

console.log({arregloCosas});

console.log(arregloCosas[0]);

//Operaciones dentro de un arreglo.
//metodos

//Metodos funcionales
//map(), filter() , reduce()

//map: transforma los elementos de un arreglo
let numeros1 = [1,2,3,4,5,6];
let cuadrados = numeros1.map(num=>num*num);
console.log(cuadrados);

//filter: Filtra los elementos que cumplen algun tipo de condicion
let numerosFilter =  [1,2,3,4,5,6];
let pares = numerosFilter.filter(num => num %2 != 0);
console.log(pares);

//reduce(): reduce todos los elementos a un solo valor
let numerosReduce =  [1,2,3,4,5,6,7,8,9,10];
let maximo = numerosReduce.reduce((acumulador,num)=>(num<acumulador ? num:acumulador),numerosReduce[0]);
console.log(maximo);

//Ventajas: Son ideales con trasformacion y manipulacion de datos dentro de un array
//permite un estilo de programacion mas limpia y facil de ver









