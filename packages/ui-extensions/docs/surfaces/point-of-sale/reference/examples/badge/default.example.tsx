import React from 'react';
import {
  Badge,
  Screen,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  return (
    <Screen title="Home" name="Home">
      <Badge
        text="Badge"
        variant="success"
        status="complete"
      />
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
