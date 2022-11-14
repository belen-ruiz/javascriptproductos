
//var

let deposito = []
//capturas DOM
let divProductos = document.getElementById("productos")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let modalBody = document.getElementById("modal-body")
let btnVerCatalogo = document.getElementById("btnVer")
let btnOcultarCatalogo = document.getElementById("btnOcultar")
let btnCarrito = document.getElementById("botonCarrito")
let btnAZ = document.getElementById("orderBtnAZ")
let btnOrderBtnMenor = document.getElementById("orderBtnMenor")
let btnOrderBtnMAyor = document.getElementById("orderBtnMAyor")
let btnSend = document.getElementById("btnSend")
let btnLogin = document.getElementById("btnLogin")
let contactModal = document.getElementById("contactModal")
let btnCloseLogin = document.getElementById("btnCloseLogin");
let selectOrden = document.getElementById("selectOrden")
let divCompra = document.getElementById("precioTotal")




//class constructora
class Producto {
  constructor(id, cat, talle, color, gen, precio) {
    (this.id = id),
      (this.cat = cat),
      (this.talle = talle),
      (this.color = color),
      (this.gen = gen),
      (this.precio = precio);
  }
  mostrarDatos() {
    console.log(`Caracteristicas de éste/a ${this.cat}:
                Articulo #${this.id}
                Talle: ${this.talle}
                Color: ${this.color}
                Género: ${this.gen}
                Precio: $${this.precio}`);
  }
  sumarIva() {
    this.precioIva = this.precio * 1.21;
  }
}

class Persona {
  constructor(nombre, apellido, email, mensaje) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.email = email),
      (this.mensaje = mensaje);
  }
  mostrarData() {
    console.log(`Persona:
                 Nombre #${this.nombre}
                 Talle: ${this.apellido}
                 email: ${this.email}
                 mensaje: $${this.mensaje}`);
  }
}


class Cuenta {
    constructor(nombre, email, password) {
      (this.nombre = nombre),
        (this.email = email),
        (this.password = password);
    }
    mostrarData() {
      console.log(`Persona:
                   Nombre #${this.nombre}
                   email: ${this.email}
                   mensaje: $${this.password}`);
    }
  }





//catalogo
const producto1 = new Producto(1, "Remera London", "S", "Rojo", "Unisex", 990);
const producto2 = new Producto(2, "Remera Paris", "M", "Verde", "Niño", 1299);
const producto3 = new Producto(
  3,
  "Pantalon Buenos Aires",
  "XL",
  "Verde",
  "Niño",
  1399
);
const producto4 = new Producto(4, "Pantalon Berlin", "M", "Rojo", "Niña", 1499);
const producto5 = new Producto(
  5,
  "Buzo Amsterdam",
  "L",
  "Violeta",
  "Niña",
  2999
);
const producto6 = new Producto(6, "Buzo Rome", "S", "Violeta", "Unisex", 2599);

const persona1 = new Persona(
  "belen",
  "RUIZ",
  "BELEN.RUIZ@GMAIL.COM",
  "hola como estas"
);


