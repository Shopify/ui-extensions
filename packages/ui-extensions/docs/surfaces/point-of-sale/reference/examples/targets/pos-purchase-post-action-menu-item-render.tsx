import React from 'react';
import {
  reactExtension,
  ActionItem,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ActionItemComponent = () => {
  const api = useApi<'pos.purchase.post.action.menu-item.render'>();
  return <ActionItem enabled onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.purchase.post.action.menu-item.render',
  () => <ActionItemComponent />,
);
