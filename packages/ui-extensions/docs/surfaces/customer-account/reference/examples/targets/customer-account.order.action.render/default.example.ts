import {CustomerAccountAction, extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order.action.render',
  (root) => {
    root.appendChild(
      root.createComponent(
        CustomerAccountAction,
        {
          title: 'Order Edit',
        },
        'Edit Order'
      ),
    );
  },
);
