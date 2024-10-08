import React from 'react';

import {
  Screen,
  reactExtension,
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.home.modal.render'>();

  return (
    <Screen name="Home" title="Home">
      <Button
        title="Print"
        onPress={api.print.print}
      />
      <PrintPreview src="/documents/test-print" />
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <Modal />,
);
