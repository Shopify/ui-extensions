export default function extension() {
  const button =
    document.createElement('s-button');
  button.textContent = 'Navigate to orders path';

  button.addEventListener('click', () => {
    shopify.navigation.navigate(
      'extension://orders',
    );
  });

  document.body.append(button);
}
