import {extension} from '@shopify/ui-extensions/checkout';

extension(
  'Checkout::PickupLocations::RenderBefore',
  (root, {locationFormVisible}) => {
    const content = root.createText(
      getTextContent(locationFormVisible.current),
    );
    root.appendChild(content);

    locationFormVisible.subscribe(
      (updatedLocationFormVisible) => {
        content.updateText(
          getTextContent(
            updatedLocationFormVisible,
          ),
        );
      },
    );

    function getTextContent(locationFormVisible) {
      if (locationFormVisible) {
        return 'The customer is being asked to provide their location.';
      } else {
        return 'Pickup locations are being shown.';
      }
    }
  },
);
