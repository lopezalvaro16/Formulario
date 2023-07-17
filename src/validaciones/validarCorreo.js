const formulario = document.getElementById("formulario");

const validarCorreo = () => {
  // Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
  const expRegCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // Obtenemos el input cantidad
  const inputCorreo = formulario["correo-receptor"];

  // Transformamos la cantidad de una cadena de texto a numero con decimales.
  // y comprobamos si es una cantidad correcta
  if (expRegCorreo.test(inputCorreo.value)) {
    inputCorreo.classList.remove("formulario__input--error");
    return true;
  } else {
    inputCorreo.classList.add("formulario__input--error");
    return false;
  }
};

export default validarCorreo;
