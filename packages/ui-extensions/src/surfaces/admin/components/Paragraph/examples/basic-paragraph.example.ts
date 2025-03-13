export default function extension() {
  const paragraph = document.createElement('s-paragraph');
  paragraph.innerHTML = '<s-text type="strong">Name:</s-text>Jane Doe';
  document.body.appendChild(paragraph);
}
