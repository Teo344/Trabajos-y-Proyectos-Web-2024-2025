/* Objetos*/

//Caracteristicas principales de los objetos en JS

//Claves y valores

//Las claves son cadenas de o simbolos unicos 
//Los valores pueden ser de cualquier tipo : numeros, cadenas, funciones, otros objetos,etc.

// Principal caracteristica: Dinamismo - Los objetos se pueden modificar en tiempo de ejecucion (agregar, modificar o eliminar propiedades
// de un objeto)

//NOta especial: Obetjos se pueden incluir metodos.

//Los metodos son funciones asociadas a un objeto


/* Objetos contienen propiedades y metodos */


let persona = {
    nombre: 'Mateo',
    apellido: 'Criollo',
    email : 'mgcriollo1@espe.edu.ec',
    edad: 20
}

console.log(persona);

//Incluir metodos en los objetos

let people = {
    name: 'Gabriel',
    lastname: 'Llumiquinga',
    age : 21,

    fullName: function(){
        return this.name +  ` ` + this.lastname;
    }
}

console.log(people.fullName());


const people2 = {
    name: 'Marcela',
    lastname : 'Gozo',
    age : 22,

    saludar: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log(people2.name);
people2.saludar();


//Para construir otro objeto, Usamos el constructor Object()
//Podemos crear un objeto vacio y agregar propiedades posteriomente

const persona1 = new Object();
persona1.nombre = 'Mateo';
persona1.apellido = 'Llumiquinga';
persona1.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre}`);
}

console.log(persona1.nombre);
persona1.saludar();

//Usando la clase Object.create();

//Permite crear objetos basado en un prototipo

const prototipoPersona ={
    saludar : function () {
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
    }
}

const persona2 = Object.create(prototipoPersona);

persona2.nombre = 'Mateo';
persona2.saludar();

//Usando clases (introducido desde ES6 ==> ES2024)
//Proporciona una sintaxis mas estructurada para crear objetos

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola desde clase, soy ${this.nombre}`);
    }
}


const persona3 = new Persona('Adrian','Perez');

persona3.saludar();

//Usando funciones constructoras
//Forma clasica, utilizada no muy frecuentemente

function Persona1(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    
    this.saludar = function(){
        console.log(`Hola desde funciones , soy ${this.nombre}`);
    }
}



const persona4 = new Persona1('Perez',50);

persona4.saludar();

//Manipulacion de los datos
//1. Agregar o modificar propiedades

const persona5 = {
    nombre: 'Pedro'
}

persona5.edad = 34;
persona5.nombre = 'Pablo';
console.log(persona5);

//2. Eliminar propiedades
//delete persona5.edad;

console.log(persona5);

//3. Iterar sobre las propiedades. 
for(nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for (let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`)
}

//Verificar propiedades 
console.log('nombre' in persona5);
console.log(persona5.hasOwnProperty('age'));

//Meotods utiles para trabajar con objetos
//1.object.keys()
//Devolcer un array con las claves de un objeto

console.log(Object.keys(persona5));

//2. Object.values();
//devuleve un array con los valores del objeto;
console.log(Object.values(persona5));

//3. Object.entries();
//Devuelve un array de pares [clave,valor]

console.log(Object.entries(persona5));

//4. Object.assign();
//Copia las propiedades de un objeto a otro.

const copia = Object.assign({},persona5);
console.log(copia);

//5. Object.freeze();
//Congelar un objeto para evitar modificaciones
//Object.freeze(persona5);

//6. Object.seal();
//Permite modificar propiedades existentes, pero no agregar ni elimnar propiedades

Object.seal(persona5);

//persona5.direccion = 'Quito';
//delete persona5.nombre;

console.log(persona5);

//Nota especial
//Respecto a la impresion de los valores de las propiedades de un objeto

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON es una notacion, es un objeto
//stringify convierte a cadenda o string cada propiedad.
console.log(personaString);



//Metodos que se usan a manera de buenas practicas
//Que permiten acceder y modifiar objetos

//Metodo get en objetos JS
//Permite acceder a los valores de las propiedades

let personaget={
    nombre: 'Mateo',
    apellido: 'Criollo',
    email : 'mgcriollo1@espe.edu.ec',
    edad: 20,

    get fullName(){  //no es una propiedad, es ahora un metodo get
        return this.nombre +  ` ` + this.apellido;
    }
}

console.log(personaget.fullName);

//validacion

let personaSet = {
    nombre: 'Mateo',
    apellido: 'Criollo',
    email : 'mgcriollo1@espe.edu.ec',
    edad: 20,
    idioma: 'es',

    get lang(){
        return this.idioma.toUpperCase();
    },

    get fullName(){  //no es una propiedad, es ahora un metodo get
        return this.nombre +  ` ` + this.apellido;
    }

}

console.log(personaSet.lang); //cambio el valor de es a ES (minuscula a mayuscula)


//metodo set en objetos Js
//Set establece o modificar los valores de los atributos de los objetos


let personaSet2 = {
    nombre: 'Mateo',
    apellido: 'Criollo',
    email : 'mgcriollo1@espe.edu.ec',
    edad: 20,
    idioma: 'es',

    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    },

    get fullName(){  //no es una propiedad, es ahora un metodo get
        return this.nombre +  ` ` + this.apellido;
    }
}



console.log(personaSet2.lang);

personaSet2.lang = 'en';

console.log(personaSet2.lang);

//Constructor
//Si se desea crear mas objetos del mismo tipo, esto NO ES POSIBLE
//Es por eso que se crea los constructores

//Es una funcion especial que permite trabajar con objetos en js
//Funcion constructora de tipo persona

function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padreFC = new PersonaFC('Marco', 'Criollo', 'marco_criollo1971@hotmail.com');  //La variable ya no es variable, ahora es un metodo que nos pemrite crear una persona

console.log(padreFC)

let madreFC = new PersonaFC('Patricia', 'Llumiquinga', 'lilipaty08@yahoo.com');

console.log(madreFC);

padreFC.telefono = '0986824606';

console.log(padreFC)
console.log(madreFC);

//Agregar un meotod a una funcion constructora de objetos.
function PersonaFCM(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' +this.apellido;
    }
}

let padreFCM = new PersonaFCM('Marco', 'Criollo', 'marco_criollo1971@hotmail.com');
console.log(padreFCM.nombreCompleto());


let madreFCM = new PersonaFCM('Patricia', 'Llumiquinga', 'lilipaty08@yahoo.com');
console.log(madreFCM.nombreCompleto());

//Uso del prototype

PersonaFCM.prototype.telefono ='1246565'; //Agreo una propiedad a todos los objetos creados de este estilo
console.log(padreFCM);
console.log(madreFCM);

//Uso de Call
let personaCall1 = {
    nombre: 'Alan',
    apellido: 'Aguirre',

    nombreCompleto: function(){
        return this.nombre+ ' '+this.apellido;
    }
}


let personaCall2 = {
    nombre: 'Mateo',
    apellido: 'Criollo',
}

//Para usar el metodo completo que pertenece al objeto personaCall1
//con los datos del objeto que estan en personaCall2

console.log(personaCall1.nombreCompleto());

console.log(personaCall1.nombreCompleto.call(personaCall2));

//Como pasar parametros a traves del metodo call
let personaCallP1 = {
    nombre: 'Alan',
    apellido: 'Aguirre',

    nombreCompleto: function(titulo , telefondo){
        return titulo + ' ' + this.nombre+ ' '+this.apellido + ' ' + telefondo;
    }
}

let personaCallP2 = {
    nombre: 'Mateo',
    apellido: 'Criollo',
}

console.log(personaCallP1.nombreCompleto('Lic.','0986424785'));

console.log(personaCallP1.nombreCompleto.call(personaCallP2,'Ing.','0986824606'));


//Metodo Apply()
//Travaja los arguemntos con arreglos
let personaApply1 = {
    nombre: 'Alan',
    apellido: 'Aguirre',

    nombreCompleto: function(titulo, telefono){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ' ' + this.nombre+ ' '+this.apellido + ' ' + telefono;
    }
}

let personaApplay2 = {
    nombre: 'Mateo',
    apellido: 'Criollo',
}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApplay2));

let arreglo = ['Ing','0986485454']

console.log(personaApply1.nombreCompleto.apply(personaApplay2,arreglo));













