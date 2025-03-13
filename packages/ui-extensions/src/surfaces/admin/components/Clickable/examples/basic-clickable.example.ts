// Basic example for Clickable
export default function extension() {
  const clickable = document.createElement('s-clickable');
  const badge = document.createElement('s-badge');
  badge.textContent = 'Click me';

  clickable.addEventListener('click', () => {
    console.log('clicked');
    badge.textContent = 'Clicked';
  });

  clickable.appendChild(badge);
  document.body.appendChild(clickable);
});
