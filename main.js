// Este script tiene la única funcionalidad de agregar cuadrados a la página de forma dinámica

const items = document.querySelector(".flex-container");

for (let i = 1; i <= 8; i++) {
  const square = document.createElement("div");
  const text = document.createTextNode("Esta actividad estuvo algo dificil, esta actividad estuvo algo dificil, esta actividad estuvo algo dificil");
  square.appendChild(text);
  square.classList.add("dynamic-square"); // Usar la nueva clase "dynamic-square"
  items.appendChild(square);
}


