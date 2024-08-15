import React from 'react';
import {
  reactExtension,
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ButtonComponent = () => {
  const api = useApi<'pos.purchase.post.action.menu-item.render'>();
  return <Button onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.purchase.post.action.menu-item.render',
  () => <ButtonComponent />,
);
