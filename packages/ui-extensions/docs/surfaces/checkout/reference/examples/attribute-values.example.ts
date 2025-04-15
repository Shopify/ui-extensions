import {
  extension,
  Text,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {attributes}) => {
    attributes.subscribe(() => {
      renderUI();
    });

    function renderUI() {
      const buyerSelectedFreeTShirt =
        attributes.current?.find(
          (attr) =>
            attr.key ===
            'buyerSelectedFreeTShirt',
        )?.value;

      const tshirtSize = attributes.current?.find(
        (attr) => attr.key === 'tshirtSize',
      )?.value;

      if (
        Boolean(buyerSelectedFreeTShirt) === true
      ) {
        root.replaceChildren(
          root.createComponent(
            Text,
            undefined,
            `You selected a free t-shirt, size: ${tshirtSize}`,
          ),
        );
      } else {
        root.replaceChildren();
      }
    }

    renderUI();
  },
);
