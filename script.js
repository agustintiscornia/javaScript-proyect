
  if(!localStorage.getItem('carrito')) {
    localStorage.setItem('carrito',JSON.stringify([]))
}

  let divproducto=document.getElementById("divproducto")

fetch('productos.json')
.then(promise => promise.json())
.then(data => {

    data.forEach(element => {
      divproducto.innerHTML += `
        <div class="card" id="producto${element.id} "style="with: 18rem; margin:6px">
            <img src="./img/imagen${element.id}.jpg" class="card-img-top"
              alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.nombre}</h5>
              <p clatss="card-text">precio: ${element.precio}</p>
              <a href="#alojamientos" class=" btn btn- botonreserva" id="botonproducto${element.id}">Reserva ahora </a>
          </div>
    `
    
    });


    

  data.forEach(element => {
    document.getElementById(`botonproducto${element.id}`).addEventListener('click', () =>{
      if(arrayProductos.find(producto => producto.id == element.id)) {
        let indice = arrayProductos.findIndex(producto=> producto.id == element.id)
        arrayProductos[indice].cant++
        localStorage.setItem('carrito',JSON.stringify(arrayProductos))

      } else {
        let nuevoProducto=new Producto (element.id , element.nombre, element.precio)
        arrayProductos.push(nuevoProducto)
        localStorage.setItem('carrito',JSON.stringify(arrayProductos))

      }


    })



  })  

})

/*informacion cliente*/

class Cliente {
    constructor(nombre, apellido, telefono, email, pais, ciudad, direccion, codigopostal, nombrecompletotarjeta, numerodetarjeta,vencimiento, cvv) {
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
        this.email = email
        this.pais = pais
        this.ciudad = ciudad
        this.direccion = direccion
        this.codigopostal = codigopostal
        this.nombrecompletotarjeta= nombrecompletotarjeta
        this.numerodetarjeta = numerodetarjeta
        this.vencimiento= vencimiento
        this.cvv=cvv
    }
}

let clientes = []

let formreserva = document.getElementById("formreserva")
let clientesreserva =document.getElementById("clientesreserva")

//obtengo informacion del cliente//

formreserva.addEventListener("submit", (e) => {
    e.preventDefault()

    let nombreCliente = document.getElementById("nombre").value
    let apellidoCliente = document.getElementById("apellido").value
    let telefonoCliente = document.getElementById("telefono").value
    let emailCliente = document.getElementById("email").value
    let paisCliente = document.getElementById("pais").value
    let ciudadCliente = document.getElementById("ciudad").value
    let direccionCliente = document.getElementById("direccion").value
    let codigopostalCliente = document.getElementById("codigopostal").value
    let nombrecompletotarjetaCliente = document.getElementById("nombrecompletotarjeta").value
    let numerodetarjetaCliente = document.getElementById("numerodetarjeta").value
    let vencimientoCliente = document.getElementById("vencimiento").value
    let cvvCliente = document.getElementById("cvv").value

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, telefonoCliente, emailCliente, paisCliente, ciudadCliente, direccionCliente, codigopostalCliente,nombrecompletotarjetaCliente,numerodetarjetaCliente,vencimientoCliente,cvvCliente )

    console.log(objetoCliente)

    clientes.push(objetoCliente)

    localStorage.setItem("clientes", JSON.stringify(clientes))

    formreserva.reset ()
})

/*efectos*/
let Darkmode

if (localStorage.getItem("Darkmode")) {
    Darkmode = localStorage.getItem("Darkmode")
} else {

    Darkmode = "light"
}

localStorage.setItem("Darkmode", Darkmode)

$(() => {

    if (localStorage.getItem("Darkmode") == "dark") {
        $("body").addClass("Darkmode")
        $("#btnDarkmode").hide()
        $("#btnLightmode").show()

    } else {

        $("#btnLightmode").hide()
    }

    $("#btnDarkmode").click(() => {

        $("#btnDarkmode").hide()
        $("#btnLightmode").show()

        $("body").addClass("Darkmode")
        localStorage.setItem("Darkmode", "dark")
    })

    $("#btnLightmode").click(() => {

        $("#btnDarkmode").show()
        $("#btnLightmode").hide()

        $("body").removeClass("Darkmode")
        localStorage.setItem("Darkmode", "light")
    })

    
})



