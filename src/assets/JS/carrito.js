// Creamos la constante donde se cargarán los productos agregados al carrito de compras. Si vemos la consola observaremos que, gracias al localStorage, se muestra el contenido de carrito.html

productosEnCarrito = localStorage.getItem("productos-en-carrito")
productosEnCarrito = JSON.parse(productosEnCarrito)

const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedorTotal = document.querySelector("#total")
const botonComprar = document.querySelector("#carrito-acciones-comprar")

function cargarProductosCarrito() {
    // Haremos un if que no necesita comparación con nada. Si no se cumple, o sea, el carrito está vacío, devuelve null con el mensaje "Tu carrito está vacío".
    if(productosEnCarrito && productosEnCarrito.length > 0) {
        // Con las siguientes líneas ocultamos o mostramos el mensaje de acuerdo a la acción del usuario.
        contenedorCarritoVacio.classList.add("desactivada")
        contenedorCarritoProductos.classList.remove("desactivada")
        contenedorCarritoAcciones.classList.remove("desactivada")
        contenedorCarritoComprado.classList.add("desactivada")

        contenedorCarritoProductos.innerHTML = ""

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div")
            div.classList.add("carrito-producto")
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="../../../assets/IMG/${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
            `
            // Todo lo anterior queremos que se adjunte en el carrito (contenedorCarritoProductos).
            contenedorCarritoProductos.append(div)
        });

    } else {
        contenedorCarritoVacio.classList.remove("desactivada")
        contenedorCarritoProductos.classList.add("desactivada")
        contenedorCarritoAcciones.classList.add("desactivada")
        contenedorCarritoComprado.classList.add("desactivada")
    }
    actualizarBotonesEliminar()
    actualizarTotal()
}

cargarProductosCarrito()

// Cada vez que entremos a la página queremos que se actualicen todos los botones.
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito.splice(index, 1)
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito() {
    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductosCarrito()
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    total.innerText = `$${totalCalculado}`
}

botonComprar.addEventListener("click", comprarCarrito)
function comprarCarrito() {
    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    
    contenedorCarritoVacio.classList.add("desactivada")
    contenedorCarritoProductos.classList.add("desactivada")
    contenedorCarritoAcciones.classList.add("desactivada")
    contenedorCarritoComprado.classList.remove("desactivada")
}