// Clase Ruta
class Ruta {
    constructor(nombre, distancia, tiempoViaje) {
        this.nombre = nombre; 
        this.distancia = distancia; 
        this.tiempoViaje = tiempoViaje; 
    }

    actualizarRuta(distancia, tiempoActualizado) {
        this.distancia = distancia;
        this.tiempoViaje = tiempoActualizado;
        console.log(`Ruta actualizada: ${this.nombre}, Distancia: ${this.distancia} km, Tiempo de viaje: ${this.tiempoViaje}.`);
    }
}

class Vehiculo {
    #placa;

    constructor(placa, modelo) {
        this.#placa = placa;
        this.modelo = modelo; 
    }

    get placa() {
        return this.#placa;
    }

    set placa(nuevaPlaca) {
        this.#placa = nuevaPlaca;
    }
}

// Clase Conductor
class Conductor {
    #cedula;
    #licencia; 

    constructor(nombre, cedula, telefono, licencia) {
        this.nombre = nombre; 
        this.#cedula = cedula;
        this.telefono = telefono; 
        this.#licencia = licencia;
        this.rutaAsignada = null; 
        this.vehiculoAsignado = null; 
    }

    asignarRuta(ruta) {
        this.rutaAsignada = ruta;
        console.log(`El conductor ${this.nombre} ha sido asignado a la ruta ${ruta.nombre}.`);
    }

    asignarVehiculo(vehiculo) {
        this.vehiculoAsignado = vehiculo;
        console.log(`El conductor ${this.nombre} está conduciendo el vehículo ${vehiculo.modelo} con placa ${vehiculo.placa}.`);
    }

    get cedula() {
        return this.#cedula;
    }

    get licencia() {
        return this.#licencia;
    }

    set cedula(nuevaCedula) {
        this.#cedula = nuevaCedula;
    }

    set licencia(nuevaLicencia) {
        this.#licencia = nuevaLicencia;
    }
}

// Ejemplo de uso
const ruta1 = new Ruta("Ruta Centro", 15.5, "30 minutos");
const ruta2 = new Ruta("Ruta Norte", 25.0, "45 minutos");

const vehiculo1 = new Vehiculo("ABC123", "Toyota Corolla");
const vehiculo2 = new Vehiculo("XYZ789", "Honda Civic");

const conductor1 = new Conductor("Juan Pérez", "1234567890", "0998765432", "LIC1234");
const conductor2 = new Conductor("Ana Gómez", "0987654321", "0987654321", "LIC5678");
