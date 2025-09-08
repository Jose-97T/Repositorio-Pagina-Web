/*********************************************************** PAGINA DE CONTACTO ( MAPA DINAMICO ) **************************************************/ 

document.addEventListener('DOMContentLoaded', () => {
  
  let empresaLat = 40.405520;
  let empresaLng = -3.674125;
  
  let options={
    enableHighAccuracy:true,
    timeout: 5000,
    maximumAge: 0
  };


  /*Comprobar que el dispositivo tenga disponibles la geolocalizacion*/
  if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        success, 
        error, 
        options
      );
  }else{
    alert('Los servicios de geolocalizacion no estan disponibles');
  }

  /*Si la tiene*/
  function success(position){
    
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    let map = L.map('map', {
      center:[latitude, longitude],
      zoom:18
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Mi openSteetMaps'}).addTo(map);

    /*Calcular ruta*/
    let ruta = L.Routing.control({
      waypoints:[
        L.latLng(latitude, longitude),
        L.latLng(empresaLat, empresaLng),
      ],

      language:'es',

    }).addTo(map);
  }  

  /*Si no la tiene*/
  function error(){
    let map = L.map('map').setView([empresaLat, empresaLng],18);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Mi openSteetMaps'}).addTo(map);

    L.marker([empresaLat, empresaLng])
    .addTo(map)
    .bindPopup('Ubicación de la empresa')
    .openPopup();
  }

});