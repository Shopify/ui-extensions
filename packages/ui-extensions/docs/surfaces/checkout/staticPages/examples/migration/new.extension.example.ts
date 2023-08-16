import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {extension, i18n}) => {
    root.append(
      root.createComponent(
        Banner,
        {title: 'My extension'},
        i18n.translate('welcome', {
          target: extension.target,
        }),
      ),
    );
  },
);
