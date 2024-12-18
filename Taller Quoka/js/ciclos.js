
/*Ciclos */

//ciclos for

const heroes = ["Batman" , "Aquaman", "Superman", "Robin"];

console.warn("********For tradicional************");
for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);
}

console.warn("********For in************");
for(let i in heroes){
    console.warn(heroes[i]);
}

console.warn("********For of************");

for(let heroe of heroes){
    console.warn(heroe);
}

//Cual es la diferencia entre for in and for of
//Usos de la declaracion for
//Uso for tradicional cuando necesito el control total de los indices del array.
//Uso for in para el manejo de objetos, es decir para iterar de un objeto o los indices del array
//Uso for of para iterar los valores directamente de un iterable (array, cadenas de texto,[map, set, nodelist])

//Continue y el break dentro de un ciclo for

for (let contador = 0; contador <10; contador++) {
    if(contador%2 !=0){
        continue; //ir a la asiguiente iteracion
    }

    console.log(contador);
}


const carros = ["Ford", "Mazda","Honda","Toyota"];

for (let contador = 0; contador < carros.length; contador++) {
    if(contador==2){
        continue; //ir a la asiguiente iteracion
    }

    console.log(carros[contador]);
}


//while 
let i=0
while (carros[i]) {
    if(i==1){
        i++;
        break;
    }
    console.warn(carros[i]);
    i++;
}














