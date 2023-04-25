import {
  extend,
  BlockStack,
  View,
  InlineLayout,
  Image,
  Icon,
  Text,
  SkeletonImage,
  SkeletonText,
} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const source = 'https://yourawesomeimage.com';
  const loading = true;
  const [item1, item2] = [
    {
      title: 'Felipe Toledo WildFire',
      variantTitle: 'Medium',
      price: '$330.00',
    },
    {
      title: 'Roller',
      variantTitle: 'Medium',
      price: '$248.00',
    },
  ];
  const thumbnail = root.createComponent(
    View,
    {
      minBlockSize: 64,
      cornerRadius: 'large',
      maxInlineSize: 64,
      minInlineSize: 64,
      border: 'base',
    },
    [
      source
        ? root.createComponent(Image, {
            fit: 'cover',
            aspectRatio: 1,
            source,
            cornerRadius: 'large',
          })
        : root.createComponent(
            View,
            {maxInlineSize: 33},
            [
              root.createComponent(Icon, {
                source: 'camera',
                size: 'fill',
              }),
            ],
          ),
    ],
  );
  const itemInfo = ({title, variantTitle}) =>
    root.createComponent(
      BlockStack,
      {
        spacing: 'extraTight',
      },
      [
        loading
          ? (root.createComponent(
              SkeletonText,
              {},
              title,
            ),
            root.createComponent(
              SkeletonText,
              {},
              variantTitle,
            ))
          : (root.createComponent(
              Text,
              {},
              title,
            ),
            root.createComponent(
              Text,
              {},
              variantTitle,
            )),
      ],
    );
  const order = (item) =>
    root.createComponent(
      InlineLayout,
      {
        columns: ['auto', 'fill', 'auto'],
        spacing: 'base',
        blockAlignment: 'center',
      },
      [
        loading
          ? root.createComponent(SkeletonImage, {
              blockSize: 64,
              inlineSize: 64,
            })
          : thumbnail,
        itemInfo(item),
        loading
          ? root.createComponent(
              SkeletonText,
              {},
              item.price,
            )
          : root.createComponent(
              Text,
              {},
              item.price,
            ),
      ],
    );
  const view = root.createComponent(
    View,
    {
      maxInlineSize: 400,
    },
    [
      root.createComponent(BlockStack, {}, [
        order(item1),
        order(item2),
      ]),
    ],
  );
  root.appendChild(view);
});
