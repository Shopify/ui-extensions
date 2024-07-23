import {
  POSBlock,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.purchase.post.block.render',
  (root, api) => {
    const posBlock = root.createComponent(
      POSBlock,
      {
        action: {
          title: 'A toast message',
          onPress: () => {
            api.Toast.show('A toast message');
          },
        },
      },
    );

    root.append(posBlock);
  },
);
