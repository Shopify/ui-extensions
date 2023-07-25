import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.pickup-point-list.render-before',
  (root, {isLocationFormVisible}) => {
    const content = root.createText(
      getTextContent(
        isLocationFormVisible.current,
      ),
    );
    root.appendChild(content);

    isLocationFormVisible.subscribe(
      (updatedLocationFormVisible) => {
        content.updateText(
          getTextContent(
            updatedLocationFormVisible,
          ),
        );
      },
    );

    function getTextContent(
      isLocationFormVisible,
    ) {
      if (isLocationFormVisible) {
        return 'The customer is being asked to provide their location.';
      } else {
        return 'Pickup points are being shown.';
      }
    }
  },
);
