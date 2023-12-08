import {Button, extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order.action.menu-item.render',
  (root) => {
    root.appendChild(
      root.createComponent(
        Button,
        undefined,
        'Edit Order'
      ),
    );
  },
);
