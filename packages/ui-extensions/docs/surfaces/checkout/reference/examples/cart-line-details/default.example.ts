import {extend} from '@shopify/ui-extensions/checkout';

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
