if (propName in element) {
  // Set as a property
  element[propName] = propValue;
} else {
  // Set as an attribute
  element.setAttribute(propName, propValue);
}
