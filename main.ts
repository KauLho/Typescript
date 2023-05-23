import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

// Crear 3 registros de persona
const persona1 = new Persona(
  'Juan',
  'García Pérez',
  35,
  '12345678A',
   '23/05/1987',
  'azul',
  'Hombre',
  [
    new Direccion(
      'Casa',
      'Calle Mayor',
      1,
      2,
      'B',
      '28001',
      'Madrid',
      'Madrid'
    ),
  ],
  [new Mail('Personal', 'juan.garcia@gmail.com')],
  [new Telefono('Móvil', '600123456')],
  'Notas sobre Juan'
);

const persona2 = new Persona(
  'María',
  'López Sánchez',
  29,
  '87654321B',
  '03-07-1993',
  'verde',
  'Mujer',
  [
    new Direccion(
      'Casa',
      'Calle Mayor',
      3,
      4,
      'C',
      '28001',
      'Madrid',
      'Madrid'
    ),
  ],
  [new Mail('Personal', 'maria.lopez@gmail.com')],
  [new Telefono('Móvil', '600654321')],
  'Notas sobre María'
);

const persona3 = new Persona(
  'Pedro',
  'González Martínez',
  47,
  '56789012C',
  '06-06-1975',
  'rojo',
  'Hombre',
  [
    new Direccion(
      'Casa',
      'Calle Mayor',
      5,
      6,
      'D',
      '28001',
      'Madrid',
      'Madrid'
    ),
  ],
  [new Mail('Personal', 'pedro.gonzalez@gmail.com')],
  [new Telefono('Móvil', '600789012')],
  'Notas sobre Pedro'
);

// Mostrar los registros de persona en la consola
console.log('Registros de persona:');
console.log(persona1);
console.log(persona2);
console.log(persona3);

// Buscar persona por DNI
const personaModificar = [persona1, persona2, persona3].find(
    (persona) => persona.dni === '12345678A'
  );
  
  // Añadir nueva dirección, mail y teléfono
  personaModificar?.addDireccion(
    new Direccion(
      'Trabajo',
      'Calle Gran Vía',
      1,
      2,
      'A',
      '28013',
      'Madrid',
      'Madrid'
    )
  );
personaModificar?.addMail(new Mail('Trabajo', 'juan.garcia@empresa.com'));
  // Añadir nuevo teléfono
personaModificar?.addTelefono(new Telefono('Trabajo', '912345678'));

// Mostrar los registros de persona modificados en la consola
console.log('Registros de persona modificados:');
console.log(persona1);
console.log(persona2);
console.log(persona3);