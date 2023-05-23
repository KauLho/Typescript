"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
// Crear 3 registros de persona
var persona1 = new Persona_1.Persona('Juan', 'García Pérez', 35, '12345678A', '23/05/1987', 'azul', 'Hombre', [
    new Direccion_1.Direccion('Casa', 'Calle Mayor', 1, 2, 'B', '28001', 'Madrid', 'Madrid'),
], [new Mail_1.Mail('Personal', 'juan.garcia@gmail.com')], [new Telefono_1.Telefono('Móvil', '600123456')], 'Notas sobre Juan');
var persona2 = new Persona_1.Persona('María', 'López Sánchez', 29, '87654321B', '03-07-1993', 'verde', 'Mujer', [
    new Direccion_1.Direccion('Casa', 'Calle Mayor', 3, 4, 'C', '28001', 'Madrid', 'Madrid'),
], [new Mail_1.Mail('Personal', 'maria.lopez@gmail.com')], [new Telefono_1.Telefono('Móvil', '600654321')], 'Notas sobre María');
var persona3 = new Persona_1.Persona('Pedro', 'González Martínez', 47, '56789012C', '06-06-1975', 'rojo', 'Hombre', [
    new Direccion_1.Direccion('Casa', 'Calle Mayor', 5, 6, 'D', '28001', 'Madrid', 'Madrid'),
], [new Mail_1.Mail('Personal', 'pedro.gonzalez@gmail.com')], [new Telefono_1.Telefono('Móvil', '600789012')], 'Notas sobre Pedro');
// Mostrar los registros de persona en la consola
console.log('Registros de persona:');
console.log(persona1);
console.log(persona2);
console.log(persona3);
// Buscar persona por DNI
var personaModificar = [persona1, persona2, persona3].find(function (persona) { return persona.dni === '12345678A'; });
// Añadir nueva dirección, mail y teléfono
personaModificar === null || personaModificar === void 0 ? void 0 : personaModificar.addDireccion(new Direccion_1.Direccion('Trabajo', 'Calle Gran Vía', 1, 2, 'A', '28013', 'Madrid', 'Madrid'));
personaModificar === null || personaModificar === void 0 ? void 0 : personaModificar.addMail(new Mail_1.Mail('Trabajo', 'juan.garcia@empresa.com'));
// Añadir nuevo teléfono
personaModificar === null || personaModificar === void 0 ? void 0 : personaModificar.addTelefono(new Telefono_1.Telefono('Trabajo', '912345678'));
// Mostrar los registros de persona modificados en la consola
console.log('Registros de persona modificados:');
console.log(persona1);
console.log(persona2);
console.log(persona3);
