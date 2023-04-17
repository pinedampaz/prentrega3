const div = document.querySelector("cardArticulo")

const carrito = []

const articulos = [{ imagen: '👚', codigo: 001, tipo: 'Remera Unisex Botanica', precio: 35.00 },
                   { imagen: '👛', codigo: 002, tipo: 'Bolso Multiuso', precio: 18.00 },
                   { imagen: '💤', codigo: 003, tipo: 'Almohadon Oedipus', precio: 20.00 },
                   { imagen: '⏰', codigo: 004, tipo: 'Reloj Spring', precio: 29.00 },
                   { imagen: '😷', codigo: 005, tipo: 'Barbijo Oedipus', precio: 0.10 }]

const mensajeInicial = "Selecciona tu articulo ingresando el codigo:"

function buscarArticulo(codigo) {
    let resultado = articulos.find(articulo => articulo.codigo === parseInt(codigo))
    return resultado
}

function retornoCardHTML(articulo) {
    return `<div class="card" style="width: 18rem;">
                <p>Imagen</p>
                <div class="card-body">
                    <h5 class="card-title">Tipo</h5>
                    <p class="card-text">Precio</p>
                    <a href="#" class="btn btn-primary">Add</a>
                </div>
            </div>`
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
// }



