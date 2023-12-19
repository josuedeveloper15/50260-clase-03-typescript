import Vehiculo from "./classes/vehiculo";

let cantidadAlumnos = 100;
let nombre: string = "josue";
let estaActivo: boolean = true;

// ARRAY
let frutas: (string | number)[] = ["Manzana", "Naranja", 2, 5, 3];

frutas.forEach((el) => typeof el === "string" && el.toUpperCase());

// let cantidadRuedas: number | boolean = 5

// TUPLA
let nombreEdad: [string, number] = ["Josue", 2];

// ENUM

enum Volumen {
  Min = 10,
  Med = 50,
  Max = 100,
}

let volumenActual: Volumen = Volumen.Med;

enum EstadoPago {
  Aprobado = "aprobado",
  Rechazado = "rechazado",
}

let estadoActual: EstadoPago = EstadoPago.Aprobado;

// VOID

function saludar(nombre: string) {
  console.log(`hola mundo, ${nombre}`);
}

function calcular(num1: number, num2: number): number {
  return num1 + num2;
}

// Superheroe

interface ISuperHeroe {
  nombre: string;
  habilidades: string[];
  edad: number;
  saltar(): void;
  golpear(enemigo: string): void;
}

const spiderman: ISuperHeroe = {
  nombre: "Peter Parker",
  edad: 15,
  habilidades: ["Trepar", "Lanzar telas de arana"],
  saltar: () => {},
  golpear: (enemigo) => {
    console.log("Golpear a " + enemigo);
  },
};

class SuperHeroe {
  nombre: string;
  habilidades: string[];
  edad: number;

  constructor(nombre: string, habilidades: string[], edad: number) {
    this.nombre = nombre;
    this.habilidades = habilidades;
    this.edad = edad;
  }

  saltar(): void {
    console.log("Saltando");
  }
  golpear(enemigo: string): void {
    console.log(`Golpeando a ${enemigo}`);
  }
}

const superman = new SuperHeroe("Superman", ["Volar", "Super Fuerza"], 40); // Llamar al constructor de una clase = "instanciar"
// El resultado de "instanciar" da como resultado una instancia de la clase, y esta la almacenamos
// en una variable.
const thor = new SuperHeroe("Thor", [""], 43);

const obj = {};

if (obj instanceof SuperHeroe) {
}

// const superman: SuperHeroe = {
//   nombre: 'Casdasdas',
//   edad: 34
// }

/// P O O Programacion orientada a objetos

// FORMA MAS LARGA....

// class Producto {
//   nombre: string;
//   precio: number;

//   constructor(nombre: string, precio: number) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// FORMA CORTA
class Producto {
  constructor(public nombre: string, public precio: number) {}
}

class Carrito {
  // Propiedades
  private productos: Producto[] = [];

  getTotal(): number {
    return this.productos.reduce((prev, next) => {
      return prev + next.precio;
    }, 0);
  }

  // Metodos
  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}

const carrito = new Carrito();

const ps5 = new Producto("PlayStation 5", 500);

// carrito.agregarProducto(ps5);
// carrito.agregarProducto(ps5);
// console.log(carrito.getTotal());

// GENERICOS

// interface RespuestaListarProductos {
//   listado: Producto[];
//   pagina: number;
//   total: number;
//   mostrando: number;
// }

// interface RespuestaListarHeroes {
//   listado: SuperHeroe[];
//   pagina: number;
//   total: number;
//   mostrando: number;W
// }

interface RespuestaListar<T> {
  listado: T[];
  pagina: number;
  total: number;
  mostrando: number;
}

const respuestaListarProductos: RespuestaListar<Producto> = {
  listado: [
    // ....
  ],
  pagina: 1,
  total: 100,
  mostrando: 10,
};
