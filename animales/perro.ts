import { MascotaConDueño } from "./interfaces";
import { Animal } from "./animal";

export class Perro extends Animal implements MascotaConDueño {
  constructor(
    nombre: string,
    edad: number,
    public raza: string,
    public nombreDueño: string
  ) {
    super(nombre, edad);
  }

  emitirSonido(): void {
    console.log("¡Guau guau!");
  }
}
