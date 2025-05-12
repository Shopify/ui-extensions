export default function extension() {
  const box = document.createElement('s-box');
  box.setAttribute('max-inline-size', '300');

  const qrCode =
    document.createElement('s-qrcode');
  qrCode.setAttribute(
    'content',
    'https://shopify.com',
  );
  qrCode.setAttribute('size', 'fill');

  box.appendChild(qrCode);
  document.body.appendChild(box);
}
