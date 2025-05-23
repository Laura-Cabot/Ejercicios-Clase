// Clase abstracta Vehiculo
abstract class Vehiculo {
  constructor(
    protected marca: string,
    protected modelo: string,
    protected año: number
  ) {}

  abstract tipoVehiculo(): string;

  acelerar(): void {
    console.log(`${this.marca} ${this.modelo} está acelerando.`);
  }

  frenar(): void {
    console.log(`${this.marca} ${this.modelo} está frenando.`);
  }
}

// Clase AutoCiudad que extiende Vehiculo
class AutoCiudad extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    año: number,
    public cantidadPuertas: number
  ) {
    super(marca, modelo, año);
  }

  tipoVehiculo(): string {
    return "Auto de Ciudad";
  }
}

// Clase AutoDeportivo que extiende Vehiculo
class AutoDeportivo extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    año: number,
    public tieneTurbo: boolean
  ) {
    super(marca, modelo, año);
  }

  tipoVehiculo(): string {
    return "Auto Deportivo";
  }
}

// Clase Camioneta que extiende Vehiculo
class Camioneta extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    año: number,
    public capacidadCargaKg: number
  ) {
    super(marca, modelo, año);
  }

  tipoVehiculo(): string {
    return "Camioneta";
  }
}

// Ejemplo de uso
const autoCiudad = new AutoCiudad("Fiat", "Uno", 2020, 4);
const deportivo = new AutoDeportivo("Ferrari", "F8", 2022, true);
const camioneta = new Camioneta("Toyota", "Hilux", 2021, 1000);

console.log(autoCiudad.tipoVehiculo());
autoCiudad.acelerar();
autoCiudad.frenar();

console.log(deportivo.tipoVehiculo());
deportivo.acelerar();
deportivo.frenar();

console.log(camioneta.tipoVehiculo());
camioneta.acelerar();
camioneta.frenar();
