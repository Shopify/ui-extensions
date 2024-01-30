import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.shipping-option-item.details.render',
  (root, {target, isTargetSelected}) => {
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
      getSelectedText(isTargetSelected),
    );
    root.appendChild(selectedText);

    isTargetSelected.subscribe(
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
