import {extend} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::CartLineDetails::RenderAfter',
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
