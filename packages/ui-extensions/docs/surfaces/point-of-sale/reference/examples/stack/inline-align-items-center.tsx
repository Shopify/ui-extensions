import {
  reactExtension,
  Button,
  Stack,
  Screen,
  ScrollView,
} from '@shopify/ui-extensions-react/point-of-sale';
import React from 'react';

export default reactExtension('pos.home.modal.render', () => (
  <Screen name="Stack" title="Stack">
    <ScrollView>
      <Stack
        direction="inline"
        gap="200"
        alignItems="center"
        alignContent="center"
      >
        <Stack direction="block" gap="200">
          <Button title="Hello" />
          <Button title="Hello" />
        </Stack>
        <Button title="Hello" />
      </Stack>
    </ScrollView>
  </Screen>
));
