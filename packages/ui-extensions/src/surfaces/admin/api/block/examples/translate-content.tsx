import React from 'react';
import {
  reactExtension,
  useApi,
  Text,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const TranslateContent = () => {
  const {i18n, data} = useApi<'admin.product-details.block.render'>();

  const productId = data.selected[0]?.id;

  return (
    <BlockStack>
      <Text>{i18n.translate('blockTitle')}</Text>
      <Text>{i18n.translate('productLabel', {id: productId})}</Text>
    </BlockStack>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <TranslateContent />,
);
