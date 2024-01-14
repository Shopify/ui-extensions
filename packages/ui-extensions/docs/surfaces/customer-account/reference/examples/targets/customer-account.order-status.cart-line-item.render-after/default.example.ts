import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.cart-line-item.render-after',
  (root, {target}) => {
    const text = root.createText(
      `Line item title: ${target.current.title}`,
    );
    root.appendChild(text);

    target.subscribe((updatedTarget) => {
      text.updateText(
        `Line item title: ${updatedTarget.title}`,
      );
    });
  },
);
