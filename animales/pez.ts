import { Animal } from "./animal";

export class Pez extends Animal {
  constructor(
    nombre: string,
    edad: number,
    public tipoAgua: string
  ) {
    super(nombre, edad);
  }

  emitirSonido(): void {
    console.log("Glub glub");
  }
}
