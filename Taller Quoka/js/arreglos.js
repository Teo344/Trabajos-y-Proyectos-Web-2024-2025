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


//Agregar elementos dentro e un array
//push(): agrega uno o mas elementos al final de un arreglo

let p=[1,2,3,4];
p.push(5);
console.log(p);

//agregar un elemnto al principio del arreglo unshift()
let u = [1,2,3,4];
u.unshift(5);
console.log(u);

//agregar un elemento en cualquier posicion : splice()
let s = [1,2,3,4];
s.splice(3,0,5); //agrega el numero 5 en la posicion 1, sin eliminar los elementos anteriores
console.log(s);

//Modificar elementos de un array
//podemos acceder a un elemento directamente por su indice y modificarlo
let i = ['Ana','Juan','Pedro', 'Jose'];
i[2]='Maria'; //modificamos el elemento en la posicion 2
console.log(i);

//Si deseamos modificar el arreglo de forma inmutable se puede utilizar el metodo map()
//map() crea un nuevo arreglo con los elementos modificados

let arregloMap=[10,23,35,26];
let arregloNuevo = arregloMap.map(num => num === 10 ? 5 : num);
console.log(arregloNuevo);

//splice(): tambien se puede utilizar
let z = [1,2,3];
z.splice(1,1,5);
console.log(z);


//Eliminar elementos de un array

//Utilizando metodo pop(): Elimina el ultimo elememnto del arreglo
let arregloE=['Azul','Amarrillo', 'Rojo','Negro'];
arregloE.pop();
console.log(arregloE);

//shift elimina el primer elemento del arreglo
let arregloS = ['Azul', 'Amarrillo','Rojo', 'Negro'];
arregloS.shift();
console.log(arregloS);

//splice para eliminar cualquier elemento
let arregloSP = ['Azul', 'Amarrillo','Rojo', 'Negro','Verde'];
arregloSP.splice(1,4);
console.log(arregloSP);


