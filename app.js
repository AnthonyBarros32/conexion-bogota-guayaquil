// Crear el mapa centrado en una zona más amplia
const map = L.map('map').setView([1.27, -76.5], 5);  // Ajusta la vista del mapa

// Cargar los "tiles" de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const route = L.polyline([
  [4.711, -74.0721],
  [-2.17, -79.922]
], {
  color: '#ff69b4',
  weight: 4,
  dashArray: '10, 10',
}).addTo(map);

// Lista de marcadores
const markersData = [
  { coords: [4.7110, -74.0721], message: '<b>La Candelaria</b><br> Cada conversación contigo es como perderse en estas callecitas llenas de historia: siempre encuentro algo nuevo y especial que me encanta de ti.',
    image: 'images/la candelaria.jpg' 
   },
  { coords: [4.5954, -74.0807], message: '<b>Monserrate</b><br> Hablar contigo me hace sentir en lo más alto, como si desde aquí pudiera tocar el cielo, justo como siento cada vez que te veo sonreír.',
    image: 'images/Monserrate.jpg'
   },
  { coords: [4.6097, -74.0822], message: '<b>Plaza de Bolívar</b><br> Cada vez que compartimos algo importante, siento que estamos en el centro de todo, rodeados de significado.',
    image: 'images/Plaza-de-Bolivar.jpg'
   },
  { coords: [4.6092, -74.0800], message: '<b>Museo del Oro</b><br> Cada conversación contigo es un descubrimiento valioso, como explorar un tesoro escondido donde cada palabra brilla con su propio encanto.',
    image: 'images/Museo del Oro.jpg'
   },
  { coords: [4.6667, -74.0500], message: '<b>Parque de la 93</b><br> Si caminar juntos por este parque es como imagino, entonces nuestras conversaciones son ese paseo perfecto: llenas de risas, tranquilidad y buena compañía.',
    image: 'images/Parque de la 93.jpg'
   },
  { coords: [-2.1700, -79.9220], message: '<b>Malecón 2000</b><br> Aunque estamos lejos, cada palabra tuya me hace sentir como si camináramos juntos por este malecón, compartiendo sueños al compás del río.',
    image: 'images/malecon-2000-la-perla.jpg'
   },
  { coords: [-2.1873, -79.9585], message: '<b>Las Peñas</b><br> Hablar contigo es como recorrer este barrio colorido: cada momento tiene su propia vida, alegría y chispa que me encanta.',
    image: 'images/Laspenas.jpg'
   },
  { coords: [-2.1487, -79.9510], message: '<b>Parque Histórico</b><br> Cada charla contigo es como explorar un lugar lleno de historias, donde siempre descubro algo nuevo que me encanta de ti.',
    image: 'images/ParqueHistorico.jpg'
   },
  { coords: [-2.1900, -79.8895], message: '<b>Catedral Metropolitana</b><br> Tus palabras tienen esa magia especial, como si fueran el eco de algo eterno que me hace sentir único.',
    image: 'images/CATEDRAL-Guayaquil.jpg'
   },
  { coords: [-2.1123, -79.9170], message: '<b>Isla Santay</b><br> Conversar contigo es como caminar por esta isla tranquila: el tiempo parece detenerse, y solo importan los momentos que compartimos.',
    image: 'images/santay.jpg'
   }
];

// Crear marcadores y almacenar referencias
const markers = [];
markersData.forEach(data => {
  const marker = L.marker(data.coords).addTo(map);
  markers.push(marker);

  const popupContent = `
    ${data.message}
    <br>
    <img src="${data.image}" alt="Imagen del lugar" style="width:100%; max-width:200px; border-radius:8px; margin-top:8px;">
  `;
  marker.bindPopup(popupContent);

  marker.on('click', function () {
    map.setView(marker.getLatLng(), 10, { animate: true });
  });
});

// Botón para empezar la experiencia
document.getElementById('startButton').addEventListener('click', () => {
  // Ocultar el popup inicial
  const popup = document.getElementById('initialPopup');
  popup.style.display = 'none';

  // Centrar el mapa en la ruta y mostrar el mapa
  map.setView([1.27, -76.5], 5, { animate: true });
});

// Mostrar popup final tras cerrar todos los popups de lugares
let closedPopupsCount = 0;
markers.forEach(marker => {
  marker.on('popupclose', function () {
    closedPopupsCount++;
    checkCompletion();
  });
});
// Función para verificar si se han cerrado todos los popups
function checkCompletion() {
  if (closedPopupsCount === markers.length) {
    showFinalPopup();
  }
}
// Función para mostrar el popup final
function showFinalPopup() {
  const popup = document.getElementById('finalPopup');
  popup.classList.remove('hidden-popup');
  popup.classList.add('active-popup'); // Clase para mostrar el popup
}
// Cerrar el popup final
window.onload = function () {
  document.getElementById('closePopup').addEventListener('click', () => {
    const popup = document.getElementById('finalPopup');
    popup.classList.add('hidden-popup');
    closedPopupsCount = 0; // Reinicia el contador si deseas reabrirlo en el futuro
  });
};

// Función para crear corazones animados
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  document.body.appendChild(heart);
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  setTimeout(() => heart.remove(), 5000);
}
// Crear corazones cada 400ms
setInterval(createHeart, 400);
