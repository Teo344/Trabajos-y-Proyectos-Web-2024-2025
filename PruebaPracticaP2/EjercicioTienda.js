class producto {
    constructor(nombre,precio, cantidad, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad =cantidad;
        this.categoria = categoria;
        this.vendido=0; //con esta atributo lograremos llevar la cuenta de cuantas unidades se han vendido.
    }
}

class venta {
    constructor(producto,cantidad,total){
        this.producto=producto;
        this.cantidad=cantidad;
        this.total=total;
        this.fecha=new Date(); //metodo que nos ayude a obtener la fecha de cuando se realice la venta
    }

    informe(){ //con este metodo organizamos mejor la informacion de la venta.
        return `Venta realizada: ${this.cantidad} unidades de ${this.producto} por $${this.total}, hecha el ${this.fecha}`;
    }
}

class Inventario {
    constructor() {
      this.productos = []; //arreglo para almacenar los productos
      this.ventas = []; //arrelgo para almacenar datos necesarios para el analisis de ventas (total de ingresos)
      this.mensajesVentas = []; //arreglo para almacenar mensajes de las ventas realizadas de mejor manera
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    listarProductos(orden = 'ascendente') { //metodo para que acepte el orden el cual se va a organizar
      return this.productos.sort((a, b) =>
        orden === 'ascendente' ? a.precio - b.precio : b.precio - a.precio //en base a los precios de los prodcutos
      );
    }
  
    filtrarPorCategoria(categoria) {
      return this.productos.filter(producto => producto.categoria === categoria); //usando filter logramos obtener solamente los productos que pertenezcan a esa cateogria, devolviendo el array de los mimsos
    }
  
    realizarVenta(nombreProducto, cantidad) {
      const producto = this.productos.find(p => p.nombre === nombreProducto); //logramos indentificar si existe o no el producto
  
      if (!producto) {
        console.log(`Error: El producto "${nombreProducto}" no existe.`);
        return; //en caso de que no lo encuentre, unicamente salte el mensaje y retorna la funcion.
      }
      if (producto.cantidad < cantidad) {
        console.log(
          `Error: Cantidad insuficiente de "${nombreProducto}". Disponible: ${producto.cantidad}.`
        );
        return; //en cambio si lo encuentra pero la cantidad que solicita super al stock; entonces tambien retorna.
      }
  
      producto.cantidad -= cantidad; //para quitar del stock la cantidad que pidio
      producto.vendido += cantidad; //para calcular la cantidad de productos que se ha vendido hasta ahora
      
      this.ventas.push(new venta(nombreProducto,cantidad,producto.precio*cantidad));
      this.mensajesVentas.push(new venta(nombreProducto,cantidad,producto.precio*cantidad).informe());
          
    }
  
    aplicarDescuento(categoria, porcentaje) {
      this.productos.forEach(producto => {if (producto.categoria === categoria) {producto.precio -= (producto.precio * porcentaje) / 100;}});
      console.log(`Descuento del ${porcentaje}% aplicado a productos de la categoría "${categoria}".`);
    }
  
    generarReporte() {
      const totalIngresos = this.ventas.reduce((total, venta) => total + venta.total, 0); //accediendo al arreglo de ventas y consultado, logramos obtener y verificar el total
      const productoMasVendido = this.productos.reduce((max, producto) =>producto.vendido > max.vendido ? producto : max); //busca entre los arrelgos el prodcuto con mas ventas
  
      console.log("--- Reporte Avanzado ---");
      console.log("Inventario actualizado:");
      console.log(this.productos);
  
      console.log("\nVentas realizadas:");
      console.log(this.mensajesVentas);
  
      console.log(`\nTotal de ingresos: $${totalIngresos}`);
      console.log(`Producto más vendido: ${productoMasVendido.nombre} (${productoMasVendido.vendido} unidades)`);
    }
  }



let producto1=new producto("Manzana",0.80 , 40, "Frutas");
let producto2=new producto("Leche",0.60 , 30, "Lacteos");
let producto3=new producto("Zanahoria",0.40 , 20, "Verduras");
let producto4=new producto("Uvas",0.10 , 10, "Frutas");

let tienda = new Inventario();
tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
tienda.agregarProducto(producto3);
tienda.agregarProducto(producto4);

console.log("Acciones realiazadas antes del informe final");
tienda.realizarVenta("Uvas",20);
tienda.realizarVenta("Manzana",20);
tienda.realizarVenta("Zanahoria",15);
tienda.realizarVenta("Leche",25);

tienda.aplicarDescuento("Frutas",10);

tienda.generarReporte();


