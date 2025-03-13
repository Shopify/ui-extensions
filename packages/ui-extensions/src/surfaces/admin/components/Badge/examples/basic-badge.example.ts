export default function extension() {
  const badge = document.createElement('s-badge');
  badge.tone = 'info';
  badge.textContent = 'Fulfilled';
  document.body.appendChild(badge);
}
