/* See the locales/en.default.json tab for the translation keys and values for this example */
export default function extension() {
  const welcomeMsg = shopify.i18n.translate(
    'welcomeMessage',
  );

  const text = document.createElement('s-text');
  text.textContent = welcomeMsg;

  document.body.append(text);
}
