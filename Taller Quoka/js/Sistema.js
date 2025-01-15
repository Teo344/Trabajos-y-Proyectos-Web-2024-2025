//Sistema de ventas


//Creacion de la clase producto
class Producto{

    static contadorProductos = 0; 
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos; //primero aumento y luego asigno
        this._nombre=nombre;
        this._precio=precio;
        
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio=precio
    }

    toString(){
        return `idProducto: ${this._idProducto} , nombre: ${this._nombre} , precio: ${this._precio}`;
    }
}

//Creacion de la clase orden
class Orden {

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        //Verificar si no hemos superado el maximo de productos existentes

        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);

        }else{
            //Indica que no se pueden agregar mas productos
            console.log("No se pueden agregar mas productos a la orden");
        }

    }

    calcularTotal(){
        let totalVenta = 0;

        for(const producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }

        return totalVenta;

    }

    mostrarOrden(){
        let productosOrden ='';
        for (const producto of this._productos){
            //productosOrden += producto.toString() + '\n';
            productosOrden += '\n {' + producto.toString()+'}';
        }
        console.log(`Orden: ${this._idOrden}, Total : $${this.calcularTotal()} , Productos : ${productosOrden}`);
    }

}





//Probar


let producto1 = new Producto('Laptop',200);
let producto2 = new Producto('Mouse',20);
let producto3 = new Producto('Teclado',100);

let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

let orden2 = new Orden(); //creamos un segundo objeto
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);

orden2.mostrarOrden();


//Ejercicio RETO
/*
1. Stock disminuya el stock
2. Descuento por categoria (crear nueva propiedad en clase producto)
    Los productos de la categoria electronica debe tener un descuento del 10% al calcular el total de la venta
3. Aplidacion de los impuestos:
    Implementar un metodo que sea calcularImpuestos en la clase orden para que agregue un impuesto del 16% al total calculado

4. Listar los productos de forma descendente:
5. Restriccion adicional: 
    Aseguremos que los precios no sean negativos al establecerlos en la clase Producto

*/























