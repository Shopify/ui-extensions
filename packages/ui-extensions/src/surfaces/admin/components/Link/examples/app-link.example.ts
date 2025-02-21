export default function extension() {
  const link = document.createElement('s-link');
  link.href = 'app://baz';
  link.textContent = 'Link to app path';
  document.body.appendChild(link);
}
