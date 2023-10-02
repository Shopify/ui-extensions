import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.cart-line-item.line-components.render',
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
