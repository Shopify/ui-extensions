export default function extension() {
  const adminPrintAction = document.createElement('s-admin-print-action');
  adminPrintAction.src = 'https://example.com';
  document.body.appendChild(adminPrintAction);
}
