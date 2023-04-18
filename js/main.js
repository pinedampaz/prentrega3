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
        localStorage.setItem("carroCargado", JSON.stringify(carrito))
    }
}

function recuperarCompra () {
    const compraRecuperada = JSON.parse(localStorage.getItem("carroCargado"))
    if (compraRecuperada.length > 0){
        carrito.push(...compraRecuperada)
    }
}
recuperarCompra()

function comprar(){
    let totalCompra = carrito.reduce((acc, articulo)=> acc + articulo.precio, 0)
    alert ("El total de tu compra es de €"+ totalCompra)
}
