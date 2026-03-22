import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, {i18n}) => {
    const welcomeMsg = i18n.translate(
      'welcomeMessage',
    );

    root.appendChild(root.createText(welcomeMsg));
  },
);
