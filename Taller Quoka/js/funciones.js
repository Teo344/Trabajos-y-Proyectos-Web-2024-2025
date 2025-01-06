
/****************************************
            FUNCIONES

 ***************************************/

//Funciones en Javascript
//Funcion declarada

function miFuncion(a,b,c){
    console.log(arguments.length);
    console.log('La suma es: ' + (a+b+c));
}

miFuncion(2,3,4);

//La palabra return dentro de la funcion
function miReturn(a,b){
    return a+b;
}

let resultado = miReturn(4,5);
console.log(resultado);

//Funcion de tipo expresion
//Declaracion de una funcion que es igual a una expresion

let multiplicar = function(a,b) {return a*b};
resultado = multiplicar(2,4);
console.log(typeof multiplicar);
console.log(resultado);

//Funciones de tipo self-invoking
//Funciones que se llaman así mismas
//Funciones anónimas
//Nota: se pueden utilizar estas funciones cuando se carga un programa
//no es muy comun pero se puede utilizar en ciertos casos

(function (a,b) {
    console.log('Ejecutando la funcion: '+ (a+b));
})(3,4);

//Se utiliza  por ejemplo al iniciar un programa o una pagina


//Funciones anonimas

setTimeout(function () {
    console.log('Hola desde una funcion anonima nueva');
}, 10000);


const persona = {
    nombre: 'Mateo',
    saludar(){
        return `Hola, soy ${this.nombre}`;
    },
    apellido: 'Criollo'
}

console.log(persona.saludar());

//Funciones tipo flecha (arrow function)
//Se mantiene como una forma concisa de declarar una funcion y es ampliamente utilizada.

const sumarValores = (a,b) => a+b;
console.log(sumarValores(5,7));


const operaciones = {sumar : (a,b)=>a+b , restar : (a,b)=>a-b , multiplicar : (a,b) => a*b , dividir : (a,b)=>a/b};

console.log(operaciones.sumar(2,3));

console.log(operaciones.restar(2,3));

console.log(operaciones.multiplicar(4,2));

console.log(operaciones.dividir(4,2));




