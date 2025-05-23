import { Perro } from "./animales/perro";
import { Gato } from "./animales/gato";
import { Pez } from "./animales/pez";

class MainAnimales {
  static ejecutar(): void {
    const perro = new Perro("Fido", 5, "Labrador", "Pedro");
    const gato = new Gato("Michi", 3, "naranja", "Laura");
    const pez = new Pez("Nemo", 1, "salada");

    // Nombre, edad, y propiedades específicas
    console.log("Perro →", perro.getNombre(), perro.getEdad(), perro.raza, perro.nombreDueño);
    console.log("Gato →", gato.getNombre(), gato.getEdad(), gato.colorPelaje, gato.nombreDueño);
    console.log("Pez →", pez.getNombre(), pez.getEdad(), pez.tipoAgua);

    // Sonidos
    perro.emitirSonido();
    gato.emitirSonido();
    pez.emitirSonido();
  }
}

MainAnimales.ejecutar();
