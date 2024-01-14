import {
  extension,
  BlockStack,
  Button,
  Image,
  InlineStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

extension(
  'customer-account.order-status.block.render',
  (root) => {
    const inlineStack = root.createComponent(
      InlineStack,
      {},
      [
        root.createComponent(Image, {
          source: '/url/for/image',
        }),
        root.createComponent(BlockStack, {}, [
          root.createComponent(
            Text,
            {size: 'large'},
            'Heading',
          ),
          root.createComponent(
            Text,
            {size: 'small'},
            'Description',
          ),
        ]),
        root.createComponent(
          Button,
          {
            onPress: () => {
              console.log('button was pressed');
            },
          },
          'Button',
        ),
      ],
    );

    void root.appendChild(inlineStack);
  },
);
