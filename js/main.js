
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

function verCarrito() {
    console.table(carrito)
}

function comprar() {
    let codigo = prompt(mensajeInicial)
    if (!parseInt(codigo)) {
        alert("El codigo ingresado no es valido.")
        let respuesta = confirm("Desea probar nuevamente?")
        if (respuesta) {
            comprar()
        }
        return
    }
    let articuloSeleccionado = buscarArticulo(codigo)
    if (articuloSeleccionado !== undefined) {
        alert(`${articuloSeleccionado.imagen} El articulo ${articuloSeleccionado.tipo} se ha agregado a su carro.`)
        carrito.push(articuloSeleccionado)
        let respuesta = confirm("Desea agregar otro articulo?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
    } else {
        alert("El codigo ingresado no es valido.")
        let respuesta = confirm("Desea probar nuevamente?")
        if (respuesta) {
            comprar()
        }
        return
    }
}

function finalizarCompra() {
    if (carrito.lenght > 0) {
        const shopping = new Compra(carrito)
        alert(`El valor de la compra es de € ${shopping.obtenerSubtotal()}`)
        let respuesta = confirm("Desea realizar el pago?")
        if (respuesta) {
            alert(shopping.confirmarCompra())
            carrito.length = 0
        }
    } else {
        console.warn("El carro se encuentra vacio")
    }
}



