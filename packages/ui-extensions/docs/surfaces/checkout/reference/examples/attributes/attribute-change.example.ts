import {
  extension,
  BlockStack,
  Button,
  Text,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (
    root,
    {
      attributes,
      instructions,
      applyAttributeChange,
    },
  ) => {
    let giftWrap = false;
    const text = root.createComponent(Text);
    const button = root.createComponent(Button, {
      onPress: async () => {
        const result = giftWrap
          ? await applyAttributeChange({
              type: 'removeAttribute',
              key: 'giftWrap',
            })
          : await applyAttributeChange({
              type: 'updateAttribute',
              key: 'giftWrap',
              value: 'true',
            });
        if (result.type === 'error') {
          console.error(result.message);
        }
      },
    });
    const blockStack = root.createComponent(
      BlockStack,
      {
        spacing: 'tight',
      },
      [text, button],
    );

    attributes.subscribe(updateUI);
    instructions.subscribe(updateUI);

    function updateUI() {
      giftWrap = Boolean(
        attributes.current?.find(
          (attr) => attr.key === 'giftWrap',
        )?.value,
      );

      text.replaceChildren(
        `Gift wrapping: ${giftWrap ? 'Added' : 'Not set'}`,
      );
      button.updateProps({
        disabled:
          !instructions.current?.attributes
            ?.canUpdateAttributes,
      });
      button.replaceChildren(
        giftWrap
          ? 'Remove gift wrap'
          : 'Add gift wrap',
      );
    }
    updateUI();

    root.append(blockstack);
  },
);
