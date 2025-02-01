// Crear el mapa centrado en una zona más amplia
const map = L.map('map').setView([1.5, -78.5], 6); // Ajusta la vista del mapa

// Cargar los "tiles" de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lista de marcadores
const markersData = [
  { coords: [4.7110, -74.0721], message: '<b>La Candelaria</b><br> Cada conversación contigo es como perderse en las callecitas de este barrio, llenas de historia y sorpresas.',
    image: 'images/la candelaria.jpg' 
   },
  { coords: [4.5954, -74.0807], message: '<b>Monserrate</b><br> Hablar contigo me hace sentir en la cima del mundo, viendo todo desde lo más alto, con claridad.',
    image: 'images/Monserrate.jpg'
   },
  { coords: [4.6097, -74.0822], message: '<b>Plaza de Bolívar</b><br> Cada vez que compartimos algo importante, siento que estamos en el centro de todo, rodeados de significado.',
    image: 'images/Plaza-de-Bolivar.jpg'
   },
  { coords: [4.6092, -74.0800], message: '<b>Museo del Oro</b><br> Como descubrir cada detalle de una historia que me encanta, una conversación contigo siempre tiene algo valioso.',
    image: 'images/Museo del Oro.jpg'
   },
  { coords: [4.6667, -74.0500], message: '<b>Parque de la 93</b><br> Conversar contigo es como dar una vuelta por este parque, rodeado de risas y buena compañía.',
    image: 'images/Parque de la 93.jpg'
   },
  { coords: [-2.1700, -79.9220], message: '<b>Malecón 2000</b><br> Cada vez que hablo contigo, siento que estamos caminando juntos por este malecón.',
    image: 'images/malecon-2000-la-perla.jpg'
   },
  { coords: [-2.1873, -79.9585], message: '<b>Las Peñas</b><br> Como este barrio colorido, cada conversación contigo es única y llena de vida.',
    image: 'images/Laspenas.jpg'
   },
  { coords: [-2.1487, -79.9510], message: '<b>Parque Histórico</b><br> Cada conversación contigo me hace descubrir algo nuevo, como explorar un lugar lleno de historias.',
    image: 'images/ParqueHistorico.jpg'
   },
  { coords: [-2.1900, -79.8895], message: '<b>Catedral Metropolitana</b><br> Hablar contigo siempre tiene una esencia única.',
    image: 'images/CATEDRAL-Guayaquil.jpg'
   },
  { coords: [-2.1123, -79.9170], message: '<b>Isla Santay</b><br> Cada charla contigo es como caminar por esta isla.',
    image: 'images/isla-Santay-Guayaquil-Ecuador.jpg'
   }
];

// Crear marcadores y almacenar referencias
const markers = [];

// Ajustar vista del mapa después de agregar todos los marcadores
markersData.forEach(data => {
  // Crear el marcador y agregarlo al mapa
  const marker = L.marker(data.coords).addTo(map);
  markers.push(marker);
  
  // Crear el contenido del popup, incluyendo la imagen
  const popupContent = `
    ${data.message}
    <br>
    <img src="${data.image}" alt="Imagen del lugar" style="width:100%; max-width:200px; border-radius:8px; margin-top:8px;">
  `;
  
  // Asociar el contenido del popup al marcador
  marker.bindPopup(popupContent);
});

// Variables para controlar si se han cerrado todos los popups
let closedPopupsCount = 0;

// Escuchar el evento cuando se cierre un popup
markers.forEach(marker => {
  marker.on('popupclose', function () {
    closedPopupsCount++;
    checkCompletion();
  });
});

// Función para verificar si todos los popups han sido cerrados
function checkCompletion() {
  console.log(`Popups cerrados: ${closedPopupsCount}/${markers.length}`);
  if (closedPopupsCount === markers.length) {
    showFinalPopup();
  }
}

// Mostrar el popup final
function showFinalPopup() {
  const popup = document.getElementById('finalPopup');
  popup.classList.remove('hidden-popup');
}

window.onload = function () {
  document.getElementById('closePopup').addEventListener('click', () => {
    const popup = document.getElementById('finalPopup');
    popup.classList.add('hidden-popup');
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

setInterval(createHeart, 400);
