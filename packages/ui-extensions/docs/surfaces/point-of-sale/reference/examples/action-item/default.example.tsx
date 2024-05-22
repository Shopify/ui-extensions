import React from 'react';
import {
  reactExtension,
  useApi,
  ActionItem,
} from '@shopify/ui-extensions-react/point-of-sale';

const PostPurchaseActionItem = () => {
  const api = useApi<'pos.purchase.post.action.menu-item.render'>();

  return (
    <ActionItem
      onPress={() => api.action.presentModal()}
      enabled
    />
  );
};

export default reactExtension(
  'pos.purchase.post.action.menu-item.render',
  () => <PostPurchaseActionItem />
);