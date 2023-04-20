const pintarProductos = (data) => {
    const contenedor = document.getElementById("producto-contenedor");

    data.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${producto.imagen}>
                          <p class="card-title">${producto.nombre}</p>
                        </div>
                        <div class="card-content">
                        <b> Precio: $ ${producto.precio}</b>
                            <p>${producto.desc}</p>
                            <a class="btn-floating btn-small halfway-fab wabes-effect waves-light blue"><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                            
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };

  