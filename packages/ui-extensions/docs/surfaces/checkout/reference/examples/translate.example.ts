/* See the locales/en.default.json tab for the translation keys and values for this example */
import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {i18n}) => {
    const welcomeMsg = i18n.translate(
      'welcomeMessage',
    );

    root.appendChild(root.createText(welcomeMsg));
  },
);
