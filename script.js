const formulario = document.getElementById("formulario");
const contenedorGenero = document.getElementById("contenedor-genero");
const labelTerminos = document.getElementById("label-terminos");

formulario.onsubmit = function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const fecha = document.getElementById("fecha");
  const genero = document.querySelector('input[name="genero"]:checked');
  const pais = document.getElementById("pais");
  const terminos = document.getElementById("terminos");

  let valido = true;

  const campos = document.querySelectorAll(
    "input:not([type='radio']):not([type='checkbox']), select"
  );
  for (let i = 0; i < campos.length; i++) {
    campos[i].classList.remove("error");
  }
  contenedorGenero.classList.remove("error");
  labelTerminos.classList.remove("error");

  if (nombre.value.trim() === "") {
    nombre.classList.add("error");
    valido = false;
  }

  if (email.value.trim() === "") {
    email.classList.add("error");
    valido = false;
  } else {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email.value)) {
      email.classList.add("error");
      valido = false;
      alert("Por favor introduce un formato de email válido");
    }
  }

  if (telefono.value.trim() !== "") {
    const soloNumeros = /^[0-9]+$/;
    if (!soloNumeros.test(telefono.value)) {
      telefono.classList.add("error");
      valido = false;
      alert("Formato inválido de teléfono, sólo acepta números");
    }
  }

  if (fecha.value === "") {
    fecha.classList.add("error");
    valido = false;
  }

  if (!genero) {
    contenedorGenero.classList.add("error");
    valido = false;
  }

  if (pais.value === "") {
    pais.classList.add("error");
    valido = false;
  }

  if (!terminos.checked) {
    labelTerminos.classList.add("error");
    valido = false;
  }

  if (!valido) {
    alert("Por favor, rellena todos los campos obligatorios");
  } else {
    alert("Formulario enviado correctamente, gracias");
    formulario.reset();
  }
};
