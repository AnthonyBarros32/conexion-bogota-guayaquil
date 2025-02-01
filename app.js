// Crear el mapa centrado en una zona más amplia
const map = L.map('map').setView([1.5, -78.5], 6); // Ajusta la vista del mapa para que ambos puntos sean visibles

// Cargar los "tiles" de OpenStreetMap (mapas base)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Crear los marcadores y sus mensajes para Bogotá
const bogota = L.marker([4.7110, -74.0721]).addTo(map);
bogota.bindPopup('<b>La Candelaria</b><br> Cada conversación contigo es como perderse en las callecitas de este barrio, llenas de historia y sorpresas.');

const monserrate = L.marker([4.5954, -74.0807]).addTo(map);
monserrate.bindPopup('<b>Monserrate</b><br>Hablar contigo me hace sentir en la cima del mundo, viendo todo desde lo más alto, con claridad.');

const plazaBolivar = L.marker([4.6097, -74.0822]).addTo(map);
plazaBolivar.bindPopup('<b>Plaza de Bolívar</b><br>Cada vez que compartimos algo importante, siento que estamos en el centro de todo, rodeados de significado.');

const museoOro = L.marker([4.6092, -74.0800]).addTo(map);
museoOro.bindPopup('<b>Museo del Oro</b><br>Como descubrir cada detalle de una historia que me encanta, una conversación contigo siempre tiene algo valioso.');

const parque93 = L.marker([4.6667, -74.0500]).addTo(map);
parque93.bindPopup('<b>Parque de la 93</b><br>Conversar contigo es como dar una vuelta por este parque, rodeado de risas y buena compañía.');

// Crear los marcadores y sus mensajes para Guayaquil
const guayaquil = L.marker([-2.1700, -79.9220]).addTo(map);
guayaquil.bindPopup('<b>Malecón 2000</b><br>Un hermoso paseo junto al río, con vista a la ciudad, museos, tiendas y restaurantes.');

const lasPenas = L.marker([-2.1873, -79.9585]).addTo(map);
lasPenas.bindPopup('<b>Las Peñas</b><br>Un barrio tradicional, famoso por sus coloridas casas y su cercanía al río Guayas.');

const parqueHistorico = L.marker([-2.1487, -79.9510]).addTo(map);
parqueHistorico.bindPopup('<b>Parque Histórico de Guayaquil</b><br>Un parque donde puedes disfrutar de la fauna, flora y la historia del Ecuador.');

const catedralGuayaquil = L.marker([-2.1900, -79.8895]).addTo(map);
catedralGuayaquil.bindPopup('<b>Catedral Metropolitana de Guayaquil</b><br>Una iglesia histórica ubicada en el centro de la ciudad.');

const islaSantay = L.marker([-2.1123, -79.9170]).addTo(map);
islaSantay.bindPopup('<b>Isla Santay</b><br>Una isla natural ideal para caminatas, paseos en bicicleta y disfrutar de la naturaleza.');

// Ajustar la vista para que ambos marcadores sean visibles en el mapa
const bounds = L.latLngBounds([bogota.getLatLng(), guayaquil.getLatLng()]);
map.fitBounds(bounds); // Esto hará que el mapa se ajuste para mostrar ambos puntos

// Función para crear corazones animados
function createHeart() {
    // Crear un div para el corazón
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
  
    // Añadir el corazón al body
    document.body.appendChild(heart);
  
    // Posicionar el corazón de manera aleatoria en la pantalla
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  
    // Eliminar el corazón después de que haya terminado la animación
    setTimeout(() => {
      heart.remove();
    }, 5000); // Tiempo de duración de la animación (5 segundos)
  }
  
  // Crear corazones cada 500ms
  setInterval(createHeart, 500);
  