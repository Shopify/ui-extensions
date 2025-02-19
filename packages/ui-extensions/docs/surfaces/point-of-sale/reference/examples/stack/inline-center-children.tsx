import {
  reactExtension,
  Button,
  Stack,
  Screen,
} from '@shopify/ui-extensions-react/point-of-sale';
import React from 'react';

export default reactExtension('pos.home.modal.render', () => (
  <Screen name="Stack" title="Stack">
    <Stack direction="inline" gap="200" justifyContent="center">
      <Button title="Hello" />
      <Button title="Hello" />
    </Stack>
  </Screen>
));
