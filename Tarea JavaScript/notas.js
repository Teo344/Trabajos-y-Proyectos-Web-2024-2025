let estudiante1 = ["Mateo", 15, 18, 16, 14, 17];
let estudiante2 = ["Camila", 20, 19, 18, 17, 20];
let estudiante3 = ["Luis", 10, 12, 11, 13, 10];
let estudiante4 = ["Sofia", 18, 17, 19, 16, 20];
let estudiante5 = ["Andrés", 14, 13, 15, 12, 14];
let estudiante6 = ["Mariana", 19, 18, 20, 17, 19];
let estudiante7 = ["Diego", 16, 15, 14, 18, 17];
let estudiante8 = ["Lucia", 20, 20, 20, 20, 20];
let estudiante9 = ["Fernando", 11, 12, 13, 10, 12];
let estudiante10 = ["Valeria", 17, 18, 16, 19, 18];

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


console.log("Mejo estudiante "+mejorEstudiante+" con el promedio "+mejorPromedio);
console.log("Peor estudiante "+peorEstudiante+" con el promedio "+peorPromedio);