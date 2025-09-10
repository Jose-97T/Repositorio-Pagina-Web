/*********************************************************** CARGA DE DATOS Json con Ayax (noticias) ***********************************************/

document.addEventListener('DOMContentLoaded', () => {
  fetch('./data/noticias.json' || './../data/noticias.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(({ titulo, descripcion }) => {
        cajaJson.innerHTML += `<p class="titulo"> <b>${titulo}</b>${descripcion}</p>`;
      });
    });
});