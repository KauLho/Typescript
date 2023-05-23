import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';
 
 
 export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: string;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: string, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  getNombreCompleto(): string {
    return `${this.nombre} ${this.apellidos}`;
  }

  getDireccionPrincipal(): Direccion {
    return this.direcciones[0];
  }

  getMailPrincipal(): Mail {
    return this.mails[0];
  }

  getTelefonoPrincipal(): Telefono {
    return this.telefonos[0];
  }

  getDireccionByTipo(tipo: string): Direccion | undefined {
    return this.direcciones.find((direccion) => direccion.tipo === tipo);
  }

  getMailByTipo(tipo: string): Mail | undefined {
    return this.mails.find((mail) => mail.tipo === tipo);
  }

  getTelefonoByTipo(tipo: string): Telefono | undefined {
    return this.telefonos.find((telefono) => telefono.tipo === tipo);
  }

  addDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  addMail(mail: Mail) {
    this.mails.push(mail);
  }

  addTelefono(telefono: Telefono) {
    this.telefonos.push(telefono);
  }

  modificarDatos(
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[]
  ) {
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
  }
}

