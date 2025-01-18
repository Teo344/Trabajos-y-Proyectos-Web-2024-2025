
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
  }
  
  function despedirse() {
    console.log("Adiós, ¡nos vemos pronto!");
  }
  

saludar("María", despedirse);
  



function leerArchivo(ruta, callback) {
    console.log("Iniciando la lectura del archivo...");
    setTimeout(() => {
      // Simula que la operación tomó tiempo
      const error = null; // Cambia esto a un error para probar el manejo
      const contenido = "Este es el contenido del archivo";
  
      if (error) {
        callback(error, null);
      } else {
        callback(null, contenido);
      }
    }, 2000);
  }
  
  leerArchivo("ruta/del/archivo.txt", (error, contenido) => {
    if (error) {
      console.error("Ocurrió un error al leer el archivo:", error.message);
    } else {
      console.log("Archivo leído con éxito:", contenido);
    }
  });
  



  const promesa = new Promise((resolve, reject) => {
    // Operación asíncrona
    const exito = true; // Cambiar a `false` para simular un error
    if (exito) {
      resolve("Operación completada con éxito");
    } else {
      reject("Hubo un error en la operación");
    }
  });
  

  async function miFuncion() {
    return "Hola, mundo";
  }
  
  miFuncion().then((resultado) => console.log(resultado)); // "Hola, mundo"
  


  async function esperar() {
    console.log("Esperando...");
    const resultado = await new Promise((resolve) =>
      setTimeout(() => resolve("¡Listo!"), 2000)
    );
    console.log(resultado);
  }
  
  esperar();
  // Salida:
  // Esperando...
  // (después de 2 segundos)
  // ¡Listo!
  