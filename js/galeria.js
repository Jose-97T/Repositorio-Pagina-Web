/*********************************************************** GALERIA DINAMICA DE TIPO LIGHTBOX ***********************************************/
document.addEventListener('DOMContentLoaded', () => {
    // Recorremos las imagenes
    const imagenes = document.querySelectorAll('#galeria_peliculas img, #galeria_juegos img, #galeria_series img');
    imagenes.forEach(imagen => {
    // Cuando se hace clic en una imagen
    imagen.addEventListener('click', () => {
      // Se crea un fondo oscuro
      const fondo = document.createElement('div');
      fondo.style.position = 'fixed';
      fondo.style.top = '0';
      fondo.style.left = '0';
      fondo.style.width = '100%';
      fondo.style.height = '100%';
      fondo.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      fondo.style.display = 'flex';
      fondo.style.justifyContent = 'center';
      fondo.style.alignItems = 'center';
      fondo.style.zIndex = '1000';

      // Se crea una imagen grande
      const imagenGrande = document.createElement('img');
      imagenGrande.src = imagen.src;
      imagenGrande.style.maxWidth = '90%';
      imagenGrande.style.maxHeight = '90%';
      imagenGrande.style.borderRadius = '10px';

      // Se añade la imagen al fondo
      fondo.appendChild(imagenGrande);
      document.body.appendChild(fondo);

      // Si haces clic en el fondo, se cierra
      fondo.addEventListener('click', () => {
        fondo.remove();
      });
    });
  });
});
