let botonCarrito = document.getElementById('botonCarrito')
let bodyCarrito = document.getElementById('bodyCarrito')

function cargarProductosCarrito(productosStorage) {
bodyCarrito.innerHTML= ""
productosStorage.forEach(element => {
    bodyCarrito.innerHTML +=`
    <div class="card mb-3" id="productoCarrito${element.id}" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/imagen${element.id}.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">${element.cant}</p>
        <button class="btn btn-outline-secondary" id="sum${element.id}"><i class="fas fa-plus"></i></button>
        <button class="btn btn-outline-secondary" id="rest${element.id}"><i class="fas fa-minus"></i></button>
        <p class="card-text">${new  Intl.NumberFormat("de-DE").format(element.cant * element.precio)}</p>
        <p class="card-text">Habitacion completa muy luminosa, con wifi, baño completo y television.</P>
        <button class="btn btn-danger" id="botonEliminar${element.id}"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  </div>
</div>
     
    `
});


}


botonCarrito.addEventListener('click', ()=> {

let productosStorage = JSON.parse(localStorage.getItem('carrito'))
cargarProductosCarrito(productosStorage)

})