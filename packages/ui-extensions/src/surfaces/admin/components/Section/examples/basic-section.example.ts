export default function extension() {
  const section = document.createElement('s-section');
  section.heading = 'Section heading';
  section.textContent = 'Section content';
  document.body.appendChild(section);
}
