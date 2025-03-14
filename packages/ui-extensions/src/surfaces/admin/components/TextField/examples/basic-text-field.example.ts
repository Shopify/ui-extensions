export default function extension() {
  const textField = document.createElement('s-text-field');
  textField.label = 'Name';
  textField.defaultValue = 'Jane Doe';
  textField.placeholder = 'Enter your name';

  textField.addEventListener('input', (event) => {
    console.log(event.target.value);
  });

  document.body.appendChild(textField);
});
