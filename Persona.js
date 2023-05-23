"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    Persona.prototype.getNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellidos);
    };
    Persona.prototype.getDireccionPrincipal = function () {
        return this.direcciones[0];
    };
    Persona.prototype.getMailPrincipal = function () {
        return this.mails[0];
    };
    Persona.prototype.getTelefonoPrincipal = function () {
        return this.telefonos[0];
    };
    Persona.prototype.getDireccionByTipo = function (tipo) {
        return this.direcciones.find(function (direccion) { return direccion.tipo === tipo; });
    };
    Persona.prototype.getMailByTipo = function (tipo) {
        return this.mails.find(function (mail) { return mail.tipo === tipo; });
    };
    Persona.prototype.getTelefonoByTipo = function (tipo) {
        return this.telefonos.find(function (telefono) { return telefono.tipo === tipo; });
    };
    Persona.prototype.addDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.addMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.addTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.modificarDatos = function (direcciones, mails, telefonos) {
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
    };
    return Persona;
}());
exports.Persona = Persona;
