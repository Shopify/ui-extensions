import {
  extend,
  BlockStack,
  Button,
  Image,
  InlineStack,
  Text,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::Dynamic::Render',
  (root, api) => {
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

    root.appendChild(inlineStack);
  },
);
