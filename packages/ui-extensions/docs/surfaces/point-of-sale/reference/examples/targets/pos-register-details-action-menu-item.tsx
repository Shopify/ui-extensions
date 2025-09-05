import React from 'react';

import {
  Button,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ButtonComponent = () => {
  const api = useApi<'pos.register-details.action.menu-item.render'>();

  return (
    <Button title="Open Cash Drawer" onPress={() => api.cashDrawer.open()} />
  );
};

export default reactExtension(
  'pos.register-details.action.menu-item.render',
  () => <ButtonComponent />,
);
