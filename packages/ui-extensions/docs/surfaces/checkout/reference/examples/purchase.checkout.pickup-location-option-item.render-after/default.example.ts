import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.pickup-location-option-item.render-after',
  (root, {isTargetSelected, target}) => {
    const titleText = root.createText(
      target.current.title,
    );
    root.appendChild(titleText);

    target.subscribe((updatedTarget) => {
      titleText.updateText(
        updatedTarget.title || '',
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
