interface Telefono {
  prender(): void;
  apagar(): void;
  llamar(numero: string): void;
}

class SmartPhone implements Telefono {
  private estaPrendido: boolean = false;

  prender(): void {
    this.estaPrendido = true;
    console.log("SmartPhone encendido.");
  }

  apagar(): void {
    this.estaPrendido = false;
    console.log("SmartPhone apagado.");
  }

  llamar(numero: string): void {
    if (this.estaPrendido) {
      console.log("Llamando a " + numero);
    } else {
      console.log("No se puede llamar. El teléfono está apagado.");
    }
  }

  sacarFoto(): void {
    if (this.estaPrendido) {
      console.log("Foto tomada.");
    } else {
      console.log("No se puede tomar foto. Está apagado.");
    }
  }
}

// Prueba
const miSmart = new SmartPhone();
miSmart.prender();
miSmart.llamar("123456");
miSmart.sacarFoto();
miSmart.apagar();

