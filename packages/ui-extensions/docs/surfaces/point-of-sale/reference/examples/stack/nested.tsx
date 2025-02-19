import {
  reactExtension,
  Text,
  Icon,
  Stack,
  Screen,
  Selectable,
} from '@shopify/ui-extensions-react/point-of-sale';
import React from 'react';

export default reactExtension('pos.home.modal.render', () => (
  <Screen name="Stack" title="Stack">
    <Selectable onPress={() => console.log('Pressed')}>
      <Stack
        direction="inline"
        gap="400"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        paddingInline="450"
        paddingBlock="600"
        inlineSize="100%"
      >
        <Stack direction="block" gap="100">
          <Text>Hello world!</Text>
          <Text variant="captionRegular">
            This is an example of a nested stack!
          </Text>
        </Stack>
        <Stack
          direction="inline"
          gap="600"
          alignItems="center"
          alignContent="center"
        >
          <Text>Let's go!</Text>
          <Icon name="chevron-right" />
        </Stack>
      </Stack>
    </Selectable>
  </Screen>
));
