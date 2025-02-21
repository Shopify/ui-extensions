export default function extension() {
  const link = document.createElement('s-link');
  link.href = 'shopify://admin/orders';
  link.textContent = "Shop's orders";
  document.body.appendChild(link);
}
