export default function extension() {
  const qrCode =
    document.createElement('s-qrcode');
  qrCode.setAttribute(
    'content',
    'https://shopify.com',
  );
  qrCode.setAttribute(
    'logo',
    'https://cdn.shopify.com/YOUR_IMAGE_HERE',
  );

  const paragraph = document.createElement(
    's-paragraph',
  );
  paragraph.textContent = 'Scan to visit ';

  const link = document.createElement('s-link');
  link.href = 'https://shopify.com';
  link.textContent = 'Shopify.com';
  paragraph.appendChild(link);

  document.body.appendChild(qrCode);
  document.body.appendChild(paragraph);
}
