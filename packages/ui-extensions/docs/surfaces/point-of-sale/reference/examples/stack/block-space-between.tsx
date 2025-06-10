import {
  reactExtension,
  Button,
  Stack,
  Screen,
} from '@shopify/ui-extensions-react/point-of-sale';
import React from 'react';

export default reactExtension('pos.home.modal.render', () => (
  <Screen name="Stack" title="Stack">
    <Stack
      direction="block"
      gap="200"
      justifyContent="space-between"
      blockSize="50%"
      paddingInline="450"
    >
      <Button title="Hello" />
      <Button title="Hello" />
      <Button title="Hello" />
    </Stack>
  </Screen>
));
