// Basic example for NumberField
export default function extension() {
  const numberField = document.createElement('s-number-field');
  numberField.label = 'Item quantity';
  numberField.defaultValue = '10';
  numberField.step = 5;

  document.body.appendChild(numberField);
};
