/* See the locales/en.default.json tab for the translation keys and values for this example */
import {extend} from '@shopify/ui-extensions/checkout';

extend(
  'Checkout::Dynamic::Render',
  (root, {i18n}) => {
    const welcomeMsg = i18n.translate(
      'welcomeMessage',
    );

    root.appendChild(root.createText(welcomeMsg));
  },
);
