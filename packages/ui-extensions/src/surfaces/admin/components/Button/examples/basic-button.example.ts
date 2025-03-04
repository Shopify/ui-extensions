export default function extension() {
  const button = document.createElement('s-button');
  button.onclick = () => console.log('onClick event');
  button.textContent = 'Click here';
  document.body.appendChild(button);
}
