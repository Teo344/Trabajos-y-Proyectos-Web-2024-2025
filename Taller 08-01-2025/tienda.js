
const inventario = {
    productos: [
        { nombre: "Manzanas", precio: 0.8, cantidad: 100 },
        { nombre: "Uvas", precio: 0.2, cantidad: 150 },
        { nombre: "Naranjas", precio: 0.4, cantidad: 120 },
        { nombre: "Peras", precio: 0.7, cantidad: 80 }
    ],

    venderProducto: function (nombreProducto, cantidadVender) {
        let productoEncontrado = false;

        for (const producto of inventario.productos) {
            if (producto.nombre === nombreProducto) {
                productoEncontrado = true;

                if (producto.cantidad < cantidadVender) {
                    console.log(
                        `Error: No hay suficiente stock de "${nombreProducto}". Cantidad disponible: ${producto.cantidad}.`
                    );
                } else {
                    producto.cantidad -= cantidadVender;
                    console.log(
                        `Venta exitosa: ${cantidadVender} unidades de "${nombreProducto}" vendidas. Stock restante: ${producto.cantidad}.`
                    );
                }
                break;
            }
        }
        if (!productoEncontrado) {
            console.log(`Error: El producto "${nombreProducto}" no existe en el inventario.`);
        }
    },

    descuento: function(valorDescuento){
        if(typeof valorDescuento !== "number" || valorDescuento<=0){
            console.log("El descuento debe ser un numero positivo y mayor a cero");
        }else{
            for(const producto of inventario.productos){
                producto.precio= producto.precio-(producto.precio*(valorDescuento/100));
            }
            console.log(`El descuento de ${valorDescuento}% fue aplicado a los productos`)

        }
    }

};

Object.seal(inventario.productos);

console.log("Inicio del inventario");

console.log("Venta de los productos");
inventario.venderProducto("Manzanas", 50);
inventario.venderProducto("Peras", 90);

inventario.descuento(10);
inventario.descuento(-50);


console.log("Inventario Final");
console.log(inventario.productos);
