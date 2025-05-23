import { MascotaConDueño } from "./interfaces";
import { Animal } from "./animal";

export class Gato extends Animal implements MascotaConDueño {
  constructor(
    nombre: string,
    edad: number,
    public colorPelaje: string,
    public nombreDueño: string
  ) {
    super(nombre, edad);
  }

  emitirSonido(): void {
    console.log("¡Miau!");
  }
}
