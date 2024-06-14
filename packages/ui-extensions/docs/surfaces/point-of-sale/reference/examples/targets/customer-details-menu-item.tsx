import React from 'react';
import {
  reactExtension,
  ActionItem,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ActionItemComponent = () => {
  const api = useApi<'pos.customer-details.action.menu-item.render'>();

  console.log(`Customer ID: ${api.customer.id}`);

  return <ActionItem enabled onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.customer-details.action.menu-item.render',
  () => <ActionItemComponent />,
);
