import {extend} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::ShippingMethodDetails::RenderAfter',
  (root, {target, targetSelected}) => {
    const titleText = root.createText(
      `Shipping method title: ${target.current.title}`,
    );
    root.appendChild(titleText);

    target.subscribe((updatedTarget) => {
      titleText.updateText(
        `Shipping method title: ${updatedTarget.title}`,
      );
    });

    const selectedText = root.createText(
      getSelectedText(targetSelected),
    );
    root.appendChild(selectedText);

    targetSelected.subscribe(
      (updatedSelected) => {
        selectedText.updateText(
          getSelectedText(updatedSelected),
        );
      },
    );

    function getSelectedText(selected) {
      return selected
        ? 'Selected'
        : 'Not selected';
    }
  },
);
