var nombre = "Mateo";
var apellido = "Criollo";
var edad;
edad = 20;
console.log("Mi nombre es " + nombre + " " + apellido);
console.log("Mi edad es " + edad);
console.log("Mi nombre es " + nombre + " " + apellido + " y tengo " + edad);

let x = 10;
let y = 20;
let z = x + y;
console.log(z);

//var: declara una variable global
//let: declara una variable local o tambien una variable de bloque
//const declara una variable constante y que no cambia su valor

//if marca un bloque de instrucciones
//switch marca un bloque de instrucciones si una condicion se cumple
//for maraca un bloque de instrucciones que se ejecuta varias veces
//while mara un bloque de instrucciones que se eecutan varias veces
//function marca un bloque de instrucciones que se ejecuta varia veces y se declara
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecuta cuando una condicion se cumple, ademas de devolver un valor


/* 
Ejemplo de los tipos de datos de Javascript
*/

/* Tipo de datos string */
//var=> undeprecated
//let=>moderno
//const=>moderno

let nombre2 = "Gabriel";
let apellido2 = "Llumiquinga"
console.log(nombre2);

let nombrePersona
nombrePersona = "Marcos";
console.log(nombrePersona)

/* Tipo de dato numerico */
let numero = 1000;
console.log(numero);

/* Tipo de datos Objeto object */
let persona = {
    nombre: "Mateo",
    apellido: "Criollo",
    edad: 20
}

console.log(persona)

//Tipo de dato typeof
let let1 = 'Ricardo';
console.log(typeof let1);

let let2 = 25;
console.log(typeof let2);

let let3 = true;
console.log(typeof let3);

let let4 = BigInt(123);
console.log(typeof let4);

let let5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof let5);

function saludar(){}
console.log(typeof saludar);

let simbolo= Symbol("my simbolo"); //Puede ser usado como identificador unico
console.log(typeof simbolo);

//Similar a una funcion
//Tipo de dato clase
class Person{ //Declaracion de clase
    constructor(nombres, apellidos,edad){ //propiedad y atributos
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.edad=edad;
    }
}

console.log(typeof Person);

//tipo de dato undefined: se utiliza como un valor
let variable;
console.log(variable);
console.log(typeof variable)

//Tipo de dato null
let variable2 =null;
console.log(variable2);
console.log(typeof variable2)

//Tipo de datos de arreglos

let autos = ["BWM", "MERCEDES","CHEVROLET"];
console.log(autos);
console.log(typeof autos);

//Tipo de datos generados por cadenas vacias
let cadenaVacia="";
console.log(cadenaVacia);
console.log(typeof cadenaVacia);

//Reglas de Javascript para declarar variaables
//Sin iniciar con numeros, simbolos con mayuscula

//Formas correctas
let nombresCompletos = "Mateo Gabriel";
let nombres_Completos = "Mateo Gabriel";
let $nombresCompletos = "Mateo Gabriel";
let _nombresCompletos = "Mateo Gabriel";
let a1nombresCompletos = "Mateo Gabriel";

//Formas incorrectas
//let 1nombresCompletos = "Mateo";
//let nombrescompletos = "Mateo";
//let #nombresCompletos = "Mateo";
//let 1bnombresCompletos = "Mateo";

/* Operadores en JavaScript */

//Operadores aritmeticos
//suma +
//resta -
//multiplicacion *
//division /
//modulo %

let numero1=10;
let numer2=2;
console.log(numero1+numer2);
console.log(numero1-numer2);
console.log(numero1*numer2);
console.log(numero1/numer2);
console.log(numero1%numer2);
console.log(numero1**numer2); //Exponente

let numero3 = 3 , numero4 = 2;
let numero5 = numero3 + numero4 ; 

console.log(numero5);

//Incrementos
numero5= ++numero3;
//Preincremento
console.log(numero3); //Hace esto primero
console.log(numero5);
//Postincremento
numero5 = numero4++;
console.log(numero4);
console.log(numero5); //Hace estom primero

//Decremento
numero5= --numero3;

//Predecremento
console.log(numero3); //Hace esto primero
console.log(numero5);

//PostDecremento
numero5 = numero4--;
console.log(numero4);
console.log(numero5); //Hace estom primero

//Precedencia de los operadores
//Los operadores se ejecutan de izquierda a derecha o de derecha a izquierda, segun el caso

let pre1 = 2, pre2=3 , pre3 = 4 , pre4 = 5;

let pre5 = (pre1 + pre2) * pre3;
console.log(pre5);

let pre6 = pre3 * (pre1 + pre2);
console.log(pre6);

let pre7=pre1 + pre2*pre3;
console.log(pre7);

let pre8= (pre1*pre3)+pre2 * pre4 / (pre1 + pre2);
console.log(pre8);

//Operadores de asignacion
let operador1 = 3 , operador2 = 2;
operador1+=operador2;
console.log(operador1);

operador1-=operador2;
console.log(operador1);


//Operadores de comparacion
// == : se utiliza para comparar si dos variables son iguales 
// ===: se utilizan para comparar si dos variables son iguales y del mismo tipo si es estricto

let operador3=3 , operador4 = "3";
console.log(typeof operador3);

let operador10 = operador3==operador4;
console.log(operador10);

let operador11 = operador3===operador4;
console.log(operador11);

if(operador3 == operador4){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

//Determinar si un numero es par o impar

let ejemplo1 = 6;

if(ejemplo1 % 2 == 0){
    console.log("Es par");
}else{
    console.log("Es impar")
}

//Determinar si es legal o no

let ejemploEdad = 14;

if(ejemploEdad > 17){
    console.log("Es legal");
}else{
    console.log("No es legal, sucio");
}

//De un computo de valores [12,14,16,....] de 10 valores, determinar
//cuantos son impares y cuantos son pares


let arValor=[2,4,6,8,7,1,2,3,6,4];
let par=0;
let impar=0;

for(let i = 0;i<10;i++){
    if (arValor[i]%2 == 0){
        ++par;
    }else{
        ++impar;
    }
}

console.log(par);
console.log(impar)

let s=12;
let valMin = 9, valMax = 20;

if(s>=valMin && s<=valMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor no esta dentro del rango");
}

if(s>=valMin || s<=valMax){
    console.log("El valor esat dentro del rango");
}else{
    console.log("El valor no esta dentro del rango");
}

//Operadores ternarios
let resultado = (s>=valMin && s<=valMax)? "El valor esta dentro del rango" : "El valor no esta dentro del rango";
console.log(resultado);


/* Conversion de Tipo*/

let miNumero="20";
console.log( typeof miNumero);
console.log( miNumero);


let miNumero2=Number(miNumero);
console.log(typeof miNumero2);
console.log(miNumero2);

//parseInt() convierte un string a entero (sin decimales)
//Number convierte un valor en un numero (entero o flotante)

console.log(parseInt("42 px")); //Solo la parte numerica dek string se convierte en entero
console.log(parseInt(3.1416));
console.log(parseInt("abc"))//No existe un valor numerico para la conversion

console.log(Number("42px")); //No se puede convertir toda la cadena
console.log(Number(3.1416)); //Convierte el numero en flotante
console.log(Number("2")); //Convierte el string a entero
console.log(Number("abc")); //no hay ningun numero en la cadena

let d="5zs";

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(d));

console.log(parseFloat("z456.654444"))

if(isNaN(miNumero2)){
    console.log("No es un numero");
}else{
    console.log("Es un numero")
}

if (undefined == miNumero2){
    console.log("No es un numero");
}else{
    console.log("Es un numero");
}






