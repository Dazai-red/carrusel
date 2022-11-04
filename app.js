const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

console.log(grande);
console.log(punto);

// Cuando hago click en cada punto
// saber la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de todos los puntos
// Añadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    // 50% porque es el ancho de las dos img
    // posicion = 0 transformX es 0
    // posicion = 1 transformX es -50%
    // operacion = operacion * -50
    let posicion = i;
    let operacion = posicion * -50;

    grande.style.transform = `translateX(${operacion}%)`;
    //console.log(operacion);

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });

    punto[i].classList.add("activo");
  });
});
