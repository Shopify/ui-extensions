export default function extension() {
  const heading = document.createElement('s-heading');
  heading.textContent = 'Headings are cool';
  document.body.appendChild(heading);
}
