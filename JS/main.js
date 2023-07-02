// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")

/* Creamos la función para cargar los productos. En ella vamos a recorrer el array "productos" con el método foreach. Nombramos a la variable con el singular del nombre del array (producto). Luego, en la ejecución de la función flecha, creamos un div (línea 194), le agregamos la clase "producto" (línea 195) y todo el resto a ese div (línea 196 a 203) */ 
/* El parámetro de la función se agrega para poder elegir productos por categoría */

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML ="" /* Este se agrega para que, cada vez que se ejecute la función vacíe el contenedor */
    productosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `
        contenedorProductos.append(div)
       })
       actualizarBotonesAgregar()
       /* Esta función creada en la línea 237 se llama dentro de la función "cargarProductos" para que, cada vez que se cargue un producto, se ejecute y se actualicen los botones AGREGAR */
}
cargarProductos(productos)
/* Al llamar a esta función e crea la funcionalidad del botón AGREGAR */

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        /* currentTarget nos permite hacer click en todo el botón y no solo en el ícono (esto ocurriría si solo usamos target) */

        if(e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            /* El método "find" nos devuelve lo primero que coincida con lo que le pongamos adentro */

            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productoBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
        /* Este condicional es para que cargue los productos por categorías cuando se cumple la condición, y cuando no se cumple vuelve a cargar todos los productos (con el botón correspondiente) */
    })
})

/* La función cargarProductos se ejecuta varias veces, incluso al recargar la página. También pasa cuando hacemos click en cualquiera de los botones de las categorías */

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
    /* El método addEventlistener, es un escuchador que indica al navegador que esté atento a la interacción del usuario. En este caso, llama a la función agregarAlCarrito cuando el usuario hace click en alguno de los botones AGREGAR */
}

const productosEnCarrito = []
/* Cada producto que agregue el usuario irá a un array, que obviamente arranca vacío */

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    /* Ahora debemos chequear si el producto a agregar ya existe en el carrito. Si se cumple la condición que sume la cantidad y no lo agregue de nuevo, y sino que lo agregue al array (carrito) */
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++                
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }  
    actualizarNumerito()

    /* Una vez que esté todo listo, debemos llevar todo al local storage. Para ello solo debemos guardar el array "productosEnCarrito" en el local storage y llevarlo a la página del carrito */
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

/* Creamos la función que va a modificar el numerito del carrito a medida que se agreguen productos. Esta será llamada cada vez que se agregue un producto, o sea, dentro de la funcion agregarAlCarrito */
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}