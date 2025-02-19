import {
  reactExtension,
  SegmentedControl,
  Stack,
  Screen,
} from '@shopify/ui-extensions-react/point-of-sale';
import React from 'react';

export default reactExtension('pos.home.modal.render', () => (
  <Screen name="Stack" title="Stack">
    <Stack direction="block" gap="400" alignContent="stretch" padding="400">
      <SegmentedControl
        selected="1"
        segments={[
          {id: '1', label: 'Segment 1', disabled: false},
          {id: '2', label: 'Segment 2', disabled: false},
          {id: '3', label: 'Segment 3', disabled: false},
          {id: '4', label: 'Segment 4', disabled: false},
          {id: '5', label: 'Segment 5', disabled: false},
          {id: '6', label: 'Segment 6', disabled: false},
          {id: '7', label: 'Segment 7', disabled: false},
        ]}
        onSelect={(id) => console.log(`Selected segment with id: ${id}`)}
      />
    </Stack>
  </Screen>
));
