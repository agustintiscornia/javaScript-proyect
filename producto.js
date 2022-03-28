class Producto {
    constructor (id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cant = 1
    }
}
/*
const producto1 = new alojamientos(1,"Standard Rooom",1500)
const producto2 = new alojamientos(2,"Special Room",2000)
const producto3 = new alojamientos(3,"Suit Room",2500)
*/

let arrayProductos=[]





/*AJAX*/
$('#botonfinalizar').on('click',() =>{
     $.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(bodyCarrito),function(data,estado){
       console.log(data,estado)
       if(estado){
        $('#bodyCarrito').empty()
        $('#bodyCarrito').append('<h5>Su reserva fue realizada con exito </5>')

        bodyCarrito=[]
        localStorage.clear()



       }

    })

})