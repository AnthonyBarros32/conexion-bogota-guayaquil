// Crear el mapa centrado en América del Sur
const map = L.map('map').setView([0, -78.5], 5); // Centro entre Bogotá y Guayaquil

// Cargar capa de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Puntos de interés en Bogotá
const bogota = L.marker([4.7110, -74.0721]).addTo(map)
    .bindPopup('<b>Parque Simón Bolívar</b><br>Cada conversación que compartimos se siente como un paseo por este parque. No importa la distancia, siempre encuentro algo que me hace sonreír.');

// Puntos de interés en Guayaquil
const guayaquil = L.marker([-2.1700, -79.9220]).addTo(map)
    .bindPopup('<b>Malecón 2000</b><br>Como las olas en el Malecón, nuestras conversaciones siguen fluyendo y sorprendiendo.');

const mensajeFinal = L.marker([0, -78.5]).addTo(map)
    .bindPopup('<b>Gracias por explorar</b><br>Las distancias se vuelven pequeñas cuando las conexiones son especiales.');

// Mostrar mensaje final al explorar todos los puntos
map.on('popupopen', function(e) {
    // Aquí podrías añadir lógica para mostrar el mensaje final si se clickea en todos los puntos.
});
