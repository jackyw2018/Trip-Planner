const mapboxgl = require('mapbox-gl');

const iconURLs = {
  activities: 'url(http://i.imgur.com/WbMOfMl.png)',
  restaurants: 'url(http://i.imgur.com/cqR6pUI.png)',
  hotels: 'url(http://i.imgur.com/D9574Cu.png)',
};

function buildMarker(activity, coordinates) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  markerDomEl.style.backgroundImage = iconURLs[activity];
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = buildMarker;
