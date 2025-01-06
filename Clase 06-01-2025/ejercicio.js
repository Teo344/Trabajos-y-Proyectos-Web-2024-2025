// funcion 1
function calcularPromedio(a,b,c){
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'Los parámetros deben ser números';
    }
    return((a+b+c)/3)
}

// Función 2
function determinarMayor(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Los parámetros deben ser números';
    }
    return num1 > num2 ? num1 : num2;
}

// Función 3
const esPar = (num) => {
    if (typeof num !== 'number') {
        return 'El parametro debe ser un numero';
    }
    return num % 2 === 0;
};



// Función 4
(function () {
        const a = 5, b = 10, c = 15;
        const num1 = '6', num2 = 4;
        
        console.log("Promedio: " + calcularPromedio(a, b, c));
        console.log("Mayor entre", num1, "y", num2, ":", determinarMayor(num1, num2));
        console.log("¿Es", num1, "par?:", esPar(num1));
        console.log("¿Es", num2, "par?:", esPar(num2));
})();