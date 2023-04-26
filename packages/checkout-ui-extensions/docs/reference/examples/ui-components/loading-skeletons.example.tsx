import React from 'react';
import {
  render,
  View,
  BlockStack,
  InlineLayout,
  SkeletonImage,
  Image,
  Icon,
  SkeletonText,
  Text,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <LoadingStateSkeletons />
));

export const Thumbnail = ({
  source = 'https://yourawesomeimage.com',
}) => (
  <View
    minBlockSize={64}
    cornerRadius="large"
    maxInlineSize={64}
    minInlineSize={64}
    border="base"
  >
    {source ? (
      <Image
        fit="cover"
        aspectRatio={1}
        source={source}
        cornerRadius="large"
      />
    ) : (
      <View maxInlineSize={33}>
        <Icon source="camera" size="fill" />
      </View>
    )}
  </View>
);
export const LoadingStateSkeletons = () => {
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
  const itemInfo = ({title, variantTitle}) =>
    loading ? (
      <>
        <SkeletonText>{title}</SkeletonText>
        <SkeletonText>
          {variantTitle}
        </SkeletonText>
      </>
    ) : (
      <>
        <Text emphasis="bold">{title}</Text>
        <Text appearance="subdued">
          {variantTitle}
        </Text>
      </>
    );
  const order = (item) => (
    <InlineLayout
      columns={['auto', 'fill', 'auto']}
      spacing="base"
      blockAlignment="center"
    >
      {loading ? (
        <SkeletonImage
          blockSize={64}
          inlineSize={64}
        />
      ) : (
        <Thumbnail />
      )}
      <BlockStack spacing="extraTight">
        {itemInfo(item)}
      </BlockStack>
      {loading ? (
        <SkeletonText>{item.price}</SkeletonText>
      ) : (
        <Text emphasis="bold">{item.price}</Text>
      )}
    </InlineLayout>
  );
  return (
    <View maxInlineSize={400}>
      <BlockStack>
        {order(item1)}
        {order(item2)}
      </BlockStack>
    </View>
  );
};
