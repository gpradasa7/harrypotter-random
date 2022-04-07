import { data } from "./data.js";

//*******************ABRIR POP-UP********************* */

let newPj = document.getElementById("new-pj");
let nombrePersonaje = document.querySelector("#nombre");
let apellidoPersonaje = document.querySelector("#apellido");
let escudopj = document.querySelector("#escudo");
let imgpj = document.querySelector("#img");
let casapj = document.querySelector("#casa");
seleccionarPj();
function seleccionarPj() {
  let button = document.getElementById("boton");
  const popup = document.querySelector(".popup-wrapper");
  button.addEventListener("click", () => {
    popup.style.display = "block";
    randomPj();
  });
}
//*******************CERRAR POP-UP**************************** */
const popup = document.querySelector(".popup-wrapper");
const closeButton = document.querySelector(".popup-close");
closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

//****************** PINTAR DATA ********************** */

generarAleatorio(newPj);
function generarAleatorio(newPj) {
  newPj.addEventListener("click", () => {
    randomPj();
  });
}

function randomPj() {
  let personaje = data[Math.floor(Math.random() * data.length)];
  nombrePersonaje.textContent = personaje.nombre;
  apellidoPersonaje.textContent = personaje.apellido;
  escudopj.setAttribute("src", personaje.logo);
  imgpj.setAttribute("src", personaje.imagen);
  casapj.textContent = personaje.casa;
}
