import { AnimalDomestico } from "./interfaces";

export abstract class Animal implements AnimalDomestico {
  constructor(protected nombre: string, protected edad: number) {}

  getNombre(): string {
    return this.nombre;
  }

  getEdad(): number {
    return this.edad;
  }

  abstract emitirSonido(): void;
}
