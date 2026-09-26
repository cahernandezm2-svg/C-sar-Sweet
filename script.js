// =========================
// CARRITO
// =========================

let carrito = [];

function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    alert(nombre + " fue agregado al carrito.");
}


function actualizarCarrito() {

    const lista = document.getElementById("lista-carrito");

    const cantidad = document.getElementById("cantidad-carrito");

    const totalElemento = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;


    carrito.forEach((producto, index) => {

        total += producto.precio;

        const item = document.createElement("div");

        item.classList.add("item-carrito");

        item.innerHTML = `
            <span>
                ${producto.nombre}
            </span>

            <span>
                $${producto.precio.toFixed(2)}

                <button onclick="eliminarProducto(${index})">
                    ❌
                </button>
            </span>
        `;

        lista.appendChild(item);

    });


    cantidad.textContent = carrito.length;

    totalElemento.textContent = total.toFixed(2);
}


function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();
}


function abrirCarrito() {

    document.getElementById("carrito").style.display = "flex";

}


function cerrarCarrito() {

    document.getElementById("carrito").style.display = "none";

}


function comprar() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;
    }


    let mensaje =
        "Hola, quiero realizar este pedido:%0A%0A";


    carrito.forEach(producto => {

        mensaje +=
            "- " +
            producto.nombre +
            " $" +
            producto.precio.toFixed(2) +
            "%0A";

    });


    let total = carrito.reduce(
        (suma, producto) =>
        suma + producto.precio,
        0
    );


    mensaje +=
        "%0ATotal: $" +
        total.toFixed(2);


    // CAMBIA ESTE NÚMERO POR TU WHATSAPP

    window.open(
        "https://wa.me/593XXXXXXXXX?text=" +
        mensaje,
        "_blank"
    );

}


// =========================
// FAQ
// =========================

function mostrarRespuesta(numero) {

    const respuesta =
        document.getElementById(
            "respuesta" + numero
        );


    if (respuesta.style.display === "block") {

        respuesta.style.display = "none";

    } else {

        respuesta.style.display = "block";

    }

}