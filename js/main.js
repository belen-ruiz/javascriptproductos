

//CONDICIONAL EVALUA PRIMERA VEZ QUE ENTRA AL PROYECTO
if (localStorage.getItem("deposito")) {
    deposito = JSON.parse(localStorage.getItem("deposito"));
  } else {
    console.log("Seteando el array por primera vez");
    deposito.push(producto1, producto2, producto3, producto4, producto5, producto6
    );
    localStorage.setItem("deposito", JSON.stringify(deposito));
  }

  let productosCarrito = JSON.parse(localStorage.getItem("carrito"))  || [] ;
  
  messages = JSON.parse(localStorage.getItem("messages")) || localStorage.setItem("messages", JSON.stringify(messages));

  let cuentas = JSON.parse(localStorage.getItem("cuentas"))  || [] ;
  
  
  
  
  //FUNCIONES
  
    
function mostrarCatalogo(array) {
      divProductos.innerHTML = "";
      for (let producto of array) {
        let nuevoProducto = document.createElement("div");
        nuevoProducto.innerHTML = 
        `<div id="${producto.id}" class="card" style="width: 18rem;">
                  
          <img class="card-img-top" style="height: 250px;"src="../img/ropa${producto.id}.jpg " alt="${producto.cat}">
  
          <div class="card-body">
              <h4 class="card-title">${producto.cat}</h4>
              <p>talle: ${producto.talle}</p>
              <p>color: ${producto.color}</p>
              <p>gen: ${producto.gen}</p>
              <p class="">Precio: ${producto.precio}</p>
    
              <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
          </div>
        </div>`;
        divProductos.appendChild(nuevoProducto);
  
        let btnAgregar = document.getElementById(`agregarBtn${producto.id}`)
        btnAgregar.addEventListener("click", ()=>{
          agregarCarrito(producto)
        })
      }
}
  
function agregarCarrito(producto){
    productosCarrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(productosCarrito))
    
    //tostify
    Toastify({
      text: `Agregando al carrito: ${producto.cat}`,
      duration: 2000,
      style:{
        background: "green",
      }
      }).showToast();
}
  
function cargarProdEnCarrito(array){
    modalBody.innerHTML =""
    array.forEach((productoCarrito) => {
      modalBody.innerHTML += 
        `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
  
          <img class="card-img-top" height="300px" src="../img/ropa${productoCarrito.id}.jpg" alt="${productoCarrito.cat}">
  
          <div class="card-body">
                  <h4 class="card-title">${productoCarrito.cat}</h4>
              
                  <p class="card-text">$${productoCarrito.precio}</p> 
                  <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
          </div>    
        </div>`
    });
  
    array.forEach((productoCarrito, indice)=>{
      document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", ()=>{

      //sweet alert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Eliminando del carrito: ${productoCarrito.cat}`,
        showConfirmButton: false,
        timer: 1500,
      })  
      //Eliminar del DOM
      let cardProd = document.getElementById(`productoCarrito${productoCarrito.id}`)
      cardProd.remove()
  
      //elimina del array
        productosCarrito.splice(indice, 1)
  
      //elimina del storage
      localStorage.setItem("carrito", JSON.stringify(productosCarrito))
      //calculo total
      compraTotal(array)
    })
    //calculo total
  compraTotal(array)
  })
  
}
    
function cargarProducto(array) {
      //captura y utilización de input para crear nuevo objeto
      let inputCat = document.getElementById("catInput");
      let inputTalle = document.getElementById("talleInput");
      let inputColor = document.getElementById("colorInput");
      let inputGen = document.getElementById("genInput");
      let inputPrecio = document.getElementById("precioInput");
      let prodCreado = new Producto(
        array.length+1,
        inputCat.value,
        inputTalle.value,
        inputColor.value,
        inputGen.value,
        parseFloat(inputPrecio.value)
      );
      array.push(prodCreado);
    
      localStorage.setItem("deposito", JSON.stringify(array));
      mostrarCatalogo(array);
      console.log(array);
      inputCat.value = "";
      inputTalle.value = "";
      inputColor.value = "";
      inputGen.value = "";
      inputPrecio.value = "";
  }
  
function cargarMessages(array) {
    let nombreInput = document.getElementById("nombreInput");
    let apellidoInput = document.getElementById("apellidoInput");
    let mailInput = document.getElementById("mailInput");
    let mensajeInput = document.getElementById("mensajeInput");
    
    let message = new Persona(
      nombreInput.value,
      apellidoInput.value,
      mailInput.value,
      mensajeInput.value,
    );
    array.push(message);
  
    localStorage.setItem("messages", JSON.stringify(array));
  
    console.log(array);
    nombreInput.value = "";
    apellidoInput.value = "";
    mailInput.value = "";
    mensajeInput.value = "";
    
  }
    
function buscarInfo(buscado, array){
    let busqueda = array.filter(
                        (producto) => producto.cat.toLowerCase().includes(buscado.toLowerCase()) || producto.color.toLowerCase().includes(buscado.toLowerCase()))
  
        busqueda.length == 0 ? 
                    (coincidencia.innerHTML = `<h3 class="text-success m-2">No hay coincidencias con su búsqueda.. a continuación tiene todo nuestro catálogo disponible</h3>`, mostrarCatalogo(array)) 
                    : (coincidencia.innerHTML = " ", mostrarCatalogo(busqueda))
    }
              
function ordenarAz(array) {
  let alfabeticamente = array.slice()
    alfabeticamente.sort((a,b) => {
    if(a.cat < b.cat)return -1
    if(a.cat > b.cat)return 1
    return 0
   })
   mostrarCatalogo(alfabeticamente)
  }

function ordenarPrecioMayorMenor(array) {
  let mayorMenor = [].concat(array)  
  array.sort((a, b) => b.precio - a.precio)
     mostrarCatalogo(mayorMenor)
}
   
function ordenarPrecioMenorMayor(array) {
    let menorMayor = [].concat(array)  
    array.sort((a, b) => b.precio - a.precio)
      mostrarCatalogo(menorMayor)
  }

function cargarCuenta(array) {
    let nombreInputCuenta = document.getElementById("nombreInputCuenta");
    let emailInputCuenta = document.getElementById("emailInputCuenta");
    let passwordInputCuenta = document.getElementById("passwordInputCuenta");
    
    let cuenta = new Cuenta(
        nombreInputCuenta.value,
        emailInputCuenta.value,
        passwordInputCuenta.value,
    );

    nombreInputCuenta.value == "" ||
    emailInputCuenta.value == "" ||
    passwordInputCuenta.value == "" ?  
          Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Ingrese los datos solicitados`,
          showConfirmButton: false,
          timer: 1500,
          })   
        
          : array.push(cuenta);

    localStorage.setItem("cuentas", JSON.stringify(array));
  
    nombreInputCuenta.value = "Ingrese su nombre";
    emailInputCuenta.value = "Ingrese su E-mail";
    passwordInputCuenta.value = "";

}

function compraTotal(array){
  let acumulador = 0
  acumulador = array.reduce((acc, productoCarrito)=>acc + productoCarrito.precio,0)
  acumulador == 0 ? divCompra.innerHTML = `No hay productos en el carrito`: divCompra.innerHTML = `EL total de su carrito es ${acumulador}`
}

  
  //EVENTOS 
buscador.addEventListener("input", ()=>{buscarInfo(buscador.value, deposito)})

btnLogin.onclick = function() {
    contactModal.style.display = "block";}

btnCloseLogin.onclick = function() {
    contactModal.style.display = "none";}

sendBtn.addEventListener("click", ()=>{cargarMessages(messages)})
  
btnEnviarDatos.addEventListener("click", ()=>{cargarCuenta(cuentas)})

btnVer.onclick = () =>{mostrarCatalogo(deposito)}
  
btnOcultar.onclick = ()=>{divProductos.innerHTML =""}
  
btnCarrito.addEventListener("click", ()=>{cargarProdEnCarrito(productosCarrito)})
  
selectOrden.addEventListener("change", ()=>{
  switch (selectOrden.value){
    case "1": ordenarPrecioMayorMenor(deposito)
      break;
    case "2": ordenarPrecioMenorMayor(deposito)
      break;
    case "3": ordenarAz(deposito)
      break;
  
    default:  mostrarCatalogo(deposito)
  }
}) 

  
  //codigo
mostrarCatalogo(deposito)
  

