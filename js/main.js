const tbody = document.querySelector("tbody")

const carrito = []

const articulos = [{imagen: '👚', codigo: 001, tipo: 'Remera Unisex Botanica', precio: 35.00},
{imagen: '👛', codigo: 002, tipo: 'Bolso Multiuso', precio: 18.00},
{imagen: '💤', codigo: 003, tipo: 'Almohadon Oedipus', precio: 20.00},
{imagen: '⏰', codigo: 004, tipo: 'Reloj Spring', precio: 29.00},
{imagen: '😷', codigo: 005, tipo: 'Barbijo Oedipus', precio: 10.00}]

const mensajeInicial = "Selecciona tu articulo ingresando el codigo:"

function buscarArticulo(codigo) {
    let resultado = articulos.find(articulo => articulo.codigo === parseInt(codigo))
    return resultado
}

function retornoFilaHTML(articulo) {
    return `<div class="card" style="width: 18rem;">
                <p class="card-image">${articulo.imagen}</p>
                <div class="card-body">
                    <h5 class="card-title">${articulo.tipo}</h5>
                    <p class="card-text">€ ${articulo.precio}</p>
                    <button href="#" class="btn btn-primary" id="${articulo.codigo}">AÑADIR</button>
                </div>
            </div>`
}

function cargarArticulos(array) {
    // tbody.innerHTML = ""
    array.forEach(element => {
        tbody.innerHTML += retornoFilaHTML(element)
    })
    clickBotones()
}

cargarArticulos(articulos)

function clickBotones(){
    const buttons = document.querySelectorAll("button")
    for (boton of buttons){
        boton.addEventListener("click", (e)=> {
            agregarArticulo(e.target.id)
            // console.log(e.target.id)
            // console.log("Has clickeado el producto")
        })
    }
}

function agregarArticulo(id){
    let resultado = articulos.find(articulo => articulo.codigo === parseInt(id)) 
    if (resultado !== undefined){
        carrito.push(resultado)
        console.log("Has añadido el producto", resultado.tipo, "a tu carrro!")
        guardarCompra(carrito)
    }
}

function guardarCompra(carrito){
    if (carrito.length>0){
        localStorage.setItem("carroCompra", JSON.stringify(caarito))
    }
}
// function finalizarCompra() {
//     if (carrito.lenght > 0) {
//         const shopping = new Compra(carrito)
//         alert(`El valor de la compra es de € ${shopping.obtenerSubtotal()}`)
//         let respuesta = confirm("Desea realizar el pago?")
//         if (respuesta) {
//             alert(shopping.confirmarCompra())
//             carrito.length = 0
//         }
//     } else {
//         console.warn("El carro se encuentra vacio")
//     }
// 
