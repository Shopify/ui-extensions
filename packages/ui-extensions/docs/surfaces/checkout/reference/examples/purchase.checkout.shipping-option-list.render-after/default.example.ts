import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.shipping-option-list.render-after',
  (root, {target}) => {
    const content = root.createText(
      getTextContent(target.current),
    );
    root.appendChild(content);

    target.subscribe((targetedDeliveryGroup) => {
      content.updateText(
        getTextContent(targetedDeliveryGroup),
      );
    });

    function getTextContent(deliveryGroup) {
      if (!deliveryGroup) {
        return 'Delivery group not available';
      }

      if (
        deliveryGroup.groupType ===
        'oneTimePurchase'
      ) {
        return 'One time purchase shipping group';
      }
      return 'Subscription shipping group';
    }
  },
);
