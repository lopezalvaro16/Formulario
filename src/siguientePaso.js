const siguientePaso = () => {
  // Creamos un arreglo con los pasos
  const pasos = [...document.querySelectorAll(".linea-pasos__paso")];

  const pasoActivo = document
    .querySelector(".linea-pasos__paso-check--active")
    .closest(".linea-pasos__paso");

  //Obtenemos el index del paso activo
  const indexPasoActivo = pasos.indexOf(pasoActivo);

  if (indexPasoActivo < pasos.length - 1) {
    // Eliminamos la clase activa
    pasoActivo
      .querySelector("span")
      .classList.remove("linea-pasos__paso-check--active");

    pasos[indexPasoActivo + 1]
      .querySelector("span")
      .classList.add("linea-pasos__paso-check--active");

    const id = pasos[indexPasoActivo + 1].dataset.paso;
    document
      .querySelector(`.formulario__body [data-paso="${id}"]`)
      .scrollIntoView({
        inline: "start",
        behavior: "smooth",
      });
  }
};

export default siguientePaso;
