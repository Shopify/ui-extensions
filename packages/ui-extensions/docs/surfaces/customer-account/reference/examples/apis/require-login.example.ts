export default function extension() {
  const button =
    document.createElement('s-button');
  button.textContent = 'Report an issue';

  button.addEventListener('click', async () => {
    await shopify.requireLogin();
    // send a request to backend
  });

  document.body.append(button);
}
