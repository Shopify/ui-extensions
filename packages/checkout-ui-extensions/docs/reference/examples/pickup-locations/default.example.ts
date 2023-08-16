import {extend} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::PickupLocations::RenderBefore',
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
        return 'Pickup locations are being shown.';
      }
    }
  },
);
