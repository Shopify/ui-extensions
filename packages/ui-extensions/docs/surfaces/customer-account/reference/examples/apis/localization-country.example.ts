/* See the locales/en.default.json tab for the translation keys and values for this example */
import {
  extension,
  Banner,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-index.block.render',
  (root, {i18n, localization}) => {
    const country = localization.country.current;

    if (country?.isoCode === 'CA') {
      const app = root.createComponent(Banner, {
        title: i18n.translate(
          'canadaPostWarningMessage',
        ),
      });
      root.appendChild(app);
    }
  },
);
