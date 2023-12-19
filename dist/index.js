"use strict";
let cantidadAlumnos = 100;
let nombre = "josue";
let estaActivo = true;
// ARRAY
let frutas = ["Manzana", "Naranja", 2, 5, 3];
frutas.forEach((el) => typeof el === "string" && el.toUpperCase());
// let cantidadRuedas: number | boolean = 5
// TUPLA
let nombreEdad = ["Josue", 2];
// ENUM
var Volumen;
(function (Volumen) {
    Volumen[Volumen["Min"] = 10] = "Min";
    Volumen[Volumen["Med"] = 50] = "Med";
    Volumen[Volumen["Max"] = 100] = "Max";
})(Volumen || (Volumen = {}));
let volumenActual = Volumen.Med;
var EstadoPago;
(function (EstadoPago) {
    EstadoPago["Aprobado"] = "aprobado";
    EstadoPago["Rechazado"] = "rechazado";
})(EstadoPago || (EstadoPago = {}));
let estadoActual = EstadoPago.Aprobado;
// VOID
function saludar(nombre) {
    console.log(`hola mundo, ${nombre}`);
}
function calcular(num1, num2) {
    return num1 + num2;
}
const spiderman = {
    nombre: "Peter Parker",
    edad: 15,
    habilidades: ["Trepar", "Lanzar telas de arana"],
    saltar: () => { },
    golpear: (enemigo) => {
        console.log("Golpear a " + enemigo);
    },
};
class SuperHeroe {
    constructor(nombre, habilidades, edad) {
        this.nombre = nombre;
        this.habilidades = habilidades;
        this.edad = edad;
    }
    saltar() {
        console.log("Saltando");
    }
    golpear(enemigo) {
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
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Carrito {
    constructor() {
        // Propiedades
        this.productos = [];
    }
    getTotal() {
        return this.productos.reduce((prev, next) => {
            return prev + next.precio;
        }, 0);
    }
    // Metodos
    agregarProducto(producto) {
        this.productos.push(producto);
    }
}
const carrito = new Carrito();
const ps5 = new Producto("PlayStation 5", 500);
carrito.agregarProducto(ps5);
carrito.agregarProducto(ps5);
console.log(carrito.getTotal());
