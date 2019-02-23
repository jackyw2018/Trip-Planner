const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');
const addCoordinates = require('./addCoordinates');

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFja3l3MjAxNyIsImEiOiJjanNmZWY1ZjEwd3c2M3lxczduZzhpMDg2In0.QZhOuYxyuZdrZpzDxbWTZg';

const mapElem = document.querySelector('.map');

const map = new mapboxgl.Map({
  container: mapElem,
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

map.on('click', function(e) {
  const option = document.querySelector('.form-control');
  const type = option.value;
  const coordinates = e.lngLat;
  const { lng, lat } = coordinates;
  const marker = buildMarker(type, [lng, lat]);
  marker.addTo(map);

  addCoordinates(type, coordinates);
});
