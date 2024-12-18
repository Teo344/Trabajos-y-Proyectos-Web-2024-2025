let estudiante1 = ["Mateo", 17, 18, 14, 16, 20];
let estudiante2 = ["Luis", 12, 2, 20, 6, 10];
let estudiante3 = ["Ana", 17, 18, 14, 16, 20];
let estudiante4 = ["Carlos", 17, 18, 14, 16, 20];
let estudiante5 = ["Maria", 17, 18, 14, 16, 20];
let estudiante6 = ["Pedro", 17, 18, 14, 16, 20];
let estudiante7 = ["Lucia", 17, 18, 14, 16, 20];
let estudiante8 = ["Jorge", 17, 18, 14, 16, 20];
let estudiante9 = ["Sofia", 17, 18, 14, 16, 20];
let estudiante10 = ["Diego", 17, 16, 10, 2, 1];

let arr =[estudiante1,estudiante2,estudiante3,estudiante4,estudiante5,estudiante6,estudiante7,estudiante8,estudiante9,estudiante10];

let mejorEstudiante;
let peorEstudiante;
let mejorPromedio=0;
let peorPromedio=21;

for (let estudiante of arr) {
    let nombre = estudiante[0];
    let sumaNotas = 0;
    let cantidadNotas = 0;
    let promedio;
    let maximaNota=0;
    let minNota=21;


    for (let i = 1; i < estudiante.length; i++) {
        if(estudiante[i]>maximaNota){
            maximaNota=estudiante[i];
        }

        if(estudiante[i]<minNota){
            minNota=estudiante[i];
        }

        sumaNotas += estudiante[i];
        cantidadNotas++;
    }
    
      promedio=sumaNotas/cantidadNotas

      if (promedio > mejorPromedio) {
        mejorPromedio = promedio;
        mejorEstudiante = nombre;
      }
    
      if (promedio < peorPromedio) {
        peorPromedio = promedio;
        peorEstudiante = nombre;
      }

    console.log("Estudiante: "+ nombre);
    


    console.log("Promedio: "+ promedio)
    if(promedio>=16){
        console.log("Excelente")
    }else if( promedio>=12 && promedio<16){
        console.log("Bueno");
    }else if(promedio>=8 && promedio<12){
        console.log("Aprobado");
    }else if(promedio<8){
        console.log("Reprobado");
    }else{
        console.log("Dato incorrecto")
    }

    console.log("Mayor nota: "+maximaNota);
    console.log("Menor nota:"+ minNota);
}


console.log(`Mejor estudiante: ${mejorEstudiante}, Promedio: ${mejorPromedio}`);
console.log(`Peor estudiante: ${peorEstudiante}, Promedio: ${peorPromedio}`);