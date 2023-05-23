export class Direccion {
    tipo: string;  
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoPostal: string;
    poblacion: string;
    provincia: string;
  
    constructor(tipo: string, calle: string, numero: number, piso: number, letra: string, codigoPostal: string, poblacion: string, provincia: string) {
      this.tipo = tipo;
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  }
  