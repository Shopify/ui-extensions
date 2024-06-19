import React from 'react';
import {
  reactExtension,
  ActionItem,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ActionItemComponent = () => {
  const api = useApi<'pos.product-details.action.menu-item.render'>();

  console.log(`Product ID: ${api.product.id}`);

  return <ActionItem enabled onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.product-details.action.menu-item.render',
  () => <ActionItemComponent />,
);
