const botones = document.getElementById('botones');
botones.innerHTML = '<button class="btn-small btnComprar blue" onclick="comprar()">Comprar</button><button class=" botons btn-small btnSalir grey" onclick="salir()">Salir</button>';

const formContainer = document.getElementById('formContainer');
formContainer.style.display = 'none'; // Ocultar el formulario por defecto

// Función que se llama al presionar el botón "Comprar"
function comprar() {
  botones.style.display = 'none'; // Ocultar los botones de "Comprar" y "Salir"
  formContainer.style.display = 'block'; // Mostrar el formulario
}

// Función que se llama al presionar el botón "Salir"
function salir() {
  setTimeout(() => {
    window.location.href = "index.html"; // redirecciona a la página principal
    }, 1000); // espera 1 segundos antes de redireccionar
}

// Crear label para indicar qué debe ingresar el usuario
const label = document.createElement('label');
label.for = 'codigoInput';
label.innerHTML = 'Ingrese el código de pago de 5 dígitos: ';
formContainer.appendChild(label);

// Crear input para ingresar el código
const input = document.createElement('input');
input.type = 'text';
input.id = 'codigoInput';
formContainer.appendChild(input);

// Crear botón para validar el código
const boton = document.createElement('button');
boton.innerHTML = '<button class="btn-small btnComprar grey" onclick="comprar()">Validar</button>';
boton.onclick = () => {
  const codigo = document.getElementById('codigoInput').value;
  const divResultado = document.getElementById('resultado');

  if (codigo.length === 5 && /^\d+$/.test(codigo)) {
    divResultado.innerHTML = 'Código válido. Gracias por su compra';
     realizarCompra();

  } else {
    divResultado.innerHTML = 'Código inválido';
    pintarCarrito(carrito);
    setTimeout(() => {
      window.location.href = "index.html"; // redirecciona a la página principal
      }, 2000); // espera 2 segundos antes de redireccionar
  }
};
formContainer.appendChild(boton);

// Crear div para mostrar el resultado
const divResultado = document.createElement('div');
divResultado.id = 'resultado';
document.body.appendChild(divResultado);
