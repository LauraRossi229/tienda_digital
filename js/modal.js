const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')
const modalComprar = document.querySelector('.btnComprar')
const modalSalir = document.querySelector('.btnSalir')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()

    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(e.target.value)
    }
})

modalComprar.addEventListener('click', (e) => {
    e.stopPropagation()

    if (e.target.classList.contains('btnComprar')) {
        realizarCompra(e.target.value)
    }
})

modalSalir.addEventListener('click', () => {
    cerrarCarrito.click()
});