import React from 'react';
import {
  reactExtension,
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ButtonComponent = () => {
  const api = useApi<'pos.customer-details.action.menu-item.render'>();

  return <Button onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.customer-details.action.menu-item.render',
  () => <ButtonComponent />,
);
