//Sistema de ventas

//Creación de la clase Producto
class Producto {
    static contadorProductos = 0; 
    
    constructor(nombre, precio, categoria, stock) {
        if (precio <= 0) {
            console.log("El precio del producto debe ser mayor a cero. No se creó el producto.");
            return;
        }
        if (stock < 0) {
            console.log("El stock del producto no puede ser negativo. No se creó el producto.");
            return;
        }

        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._stock = stock; 
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (precio <= 0) {
            console.log("El precio debe ser mayor a cero. No se actualizó el precio.");
        } else {
            this._precio = precio;
        }
    }

    get categoria() {
        return this._categoria;
    }
    
    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock; 
    }
    
    set stock(stock) {
        if (stock < 0) {
            console.log("El stock no puede ser negativo. No se actualizó el stock.");
        } else {
            this._stock = stock;
        }
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, categoría: ${this._categoria}, stock: ${this._stock}`;
    }
}

//Creación de la clase Orden
class Orden {
    static contadorOrdenes = 0;    
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto, cantidad) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto && producto.stock >= cantidad && cantidad > 0) {
                producto.stock -= cantidad;
                this._productos.push({ producto, cantidad });
            } else {
                console.log(`No hay suficiente stock para el producto: ${producto?.nombre || "desconocido"}.`);
            }
        } else {
            console.log("No se pueden agregar más productos a la orden.");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const { producto, cantidad } of this._productos) {
            totalVenta += producto.precio * cantidad;
        }
        return totalVenta;
    }

    calcularTotalConImpuestos(impuestoPorcentaje) {
        const totalSinImpuestos = this.calcularTotal();
        return totalSinImpuestos + totalSinImpuestos * (impuestoPorcentaje / 100);
    }

    aplicarDescuentoPorCategoria(categoria, porcentaje) {
        if (porcentaje <= 0) {
            console.log("El descuento debe ser mayor a cero. No se aplicó el descuento.");
            return;
        }

        for (const { producto, cantidad } of this._productos) {
            if (producto.categoria === categoria) {
                const nuevoPrecio = producto.precio - producto.precio * (porcentaje / 100);
                if (nuevoPrecio <= 0) {
                    console.log(`El descuento haría que el precio del producto ${producto.nombre} sea cero o negativo. No se aplicó el descuento.`);
                } else {
                    producto.precio = nuevoPrecio; // No modificar el precio base del producto, solo en la orden
                }
            }
        }
    }

    mostrarOrden() {
        this._productos.sort((a, b) => b.producto.precio - a.producto.precio);

        let productosOrden = '';
        for (const { producto, cantidad } of this._productos) {
            productosOrden += `\n {${producto.toString()}, unidades adquiridas: ${cantidad}}`;
        }
        const totalSinImpuestos = this.calcularTotal();
        const totalConImpuestos = this.calcularTotalConImpuestos(12);
        console.log(`Orden: ${this._idOrden}, 
Total sin impuestos: $${totalSinImpuestos}, 
Total con impuestos: $${totalConImpuestos}, 
Productos: ${productosOrden}`);
    }
}

// Probar

let producto1 = new Producto('Laptop', 200, "Electronica", 10);
let producto2 = new Producto('Mouse', 20, "Electronica", 20);
let producto3 = new Producto('Teclado', 100, "Electronica", 30);
let producto4 = new Producto('Camiseta', 15, "Ropa", 25);
let producto5 = new Producto('Agua embotellada', 1, "Bebida", 50);

let orden1 = new Orden();
orden1.agregarProducto(producto1, 2);
orden1.agregarProducto(producto2, 3);
orden1.agregarProducto(producto4, 5);

orden1.mostrarOrden(); 

let orden2 = new Orden();
orden2.agregarProducto(producto1, 5);
orden2.agregarProducto(producto2, 3);
orden2.agregarProducto(producto4, 4);

orden2.mostrarOrden(); 
