export default function extension() {
  const link = document.createElement('s-link');
  link.href = '/baz';
  link.textContent = 'Link relative to current path';
  document.body.appendChild(link);
}
