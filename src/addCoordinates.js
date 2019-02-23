function addCoordinates(buttonType, coordinates) {
  const type = document.querySelector(`.${buttonType}`);
  const newElem = document.createElement('LI');
  const { lng, lat } = coordinates;
  const textnode = document.createTextNode(
    `Longtitude: ${lng.toFixed(4)} | Latitutde: ${lat.toFixed(4)}`
  );
  newElem.appendChild(textnode);

  type.insertBefore(newElem, type.childNodes[0]);
}

module.exports = addCoordinates;
