
/*Sentencias de control*/

//if and else
let numero = 10;

if (numero == 1) {
    console.log("Numero 1");
}
else if (numero == 2) {
    console.log("Numero 2");
} else if (numero == 2) {
    console.warn("Numero 3");
} else {
    console.log("NO es un  numero");
}

//ejercicio referente a las estaciones de ano
//Invierno, otono, primavera, verano

let mes = 1;
let estacion;

if(mes==1 || mes==2||mes==3){
    estacion="Invierno";
}
else if (mes==4||mes==5||mes==6){
    estacion="Otono";
}
else if (mes==7||mes==8||mes==9){
    estacion="Primavera";
}
else if (mes==10||mes==11||mes==12){
    estacion="Verano";
}
else{
    estacion = "No corresponde a una estacion";
}

console.warn(estacion);

//Ejercicio
//Calcular la hora del dia

/* 6am - 11am ==> buenos dias*/
/*12am a 18pm ==> buenas tardes */
/*19pm a 23pm ==>buenas noches  */
/* 24am a 5am ==>durmiendo */

let hora = 4;
let mensaje;

if (hora>=6 && hora<=11){
    mensaje="Buenos dias";
}
else if(hora>=12 && hora<=18){
    mensaje="Buenas tardes";
}
else if(hora>=19 && hora <=23){
    mensaje="Buenas noches";
}
else if (hora>=0 && hora<6){
    mensaje="Durmiendo";
}
else{
    mensaje="No es una hora correspondidad";
}

console.warn(mensaje);

//switch
let mes2=11;
let estacion2 = "Estacion desconocida";

switch (mes2) {
    case 1: case 2:case 3:
        estacion2="Inviero";
        break;
    case 4: case 5:case 6:
        estacion2="Otono";
        break;
     case 7: case 8:case 9:
        estacion2="Primavera";
        break;
     case 10: case 11:case 12:
        estacion2="Verano";
        break;
    default:
        estacion="Valor incorrecto";
        break;
}

console.warn(estacion2);



//Otra forma de utilizar el if
let hora2 = 9;
let mensaje2;

if (hora2>=6 && hora2<=11)
    mensaje2="Buenos dias";
else if(hora2>=12 && hora2<=18)
    mensaje2="Buenas tardes";
else if(hora2>=19 && hora2 <=23)
    mensaje2="Buenas noches";

else if (hora2>=0 && hora2<6)
    mensaje2="Durmiendo";
else
    mensaje2="No es una hora correspondidad";


console.warn(mensaje2);











