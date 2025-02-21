export default function extension() {
  const adminBlock = document.createElement('s-admin-block');
  adminBlock.title = 'My App Block';
  adminBlock.textContent = '5 items active';
  document.body.appendChild(adminBlock);
}
