import React from 'react';
import {
  reactExtension,
  useApi,
  ActionItem,
} from '@shopify/ui-extensions-react/point-of-sale';

const ModalTriggerActionItem = () => {
  const api = useApi();

  const handlePress = () => {
    api.action.presentModal();
  };

  return (
    <ActionItem
      enabled
      onPress={handlePress}
    />
  );
};

export default reactExtension(
  'pos.purchase.post.action.menu-item.render',
  () => <ModalTriggerActionItem />
);