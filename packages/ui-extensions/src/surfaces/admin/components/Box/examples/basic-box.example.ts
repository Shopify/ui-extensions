export default function extension() {
  const box = document.createElement('s-box');
  box.padding = 'base';
  box.textContent = 'Box';
  document.body.appendChild(box);
}
