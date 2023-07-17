const formulario = document.getElementById("formulario");

const validarNombre = () => {
  // Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
  const expRegCantidad = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  // Obtenemos el input cantidad
  const inputNombre = formulario["nombre-receptor"];

  // Transformamos la cantidad de una cadena de texto a numero con decimales.
  // y comprobamos si es una cantidad correcta
  if (expRegCantidad.test(inputNombre.value)) {
    inputNombre.classList.remove("formulario__input--error");
    return true;
  } else {
    inputNombre.classList.add("formulario__input--error");
    return false;
  }
};

export default validarNombre;
