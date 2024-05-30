import React from 'react';
import {
  reactExtension,
  Screen,
  SegmentedControl,
  Stack,
} from '@shopify/ui-extensions-react/point-of-sale';

export const SmartGridModal = () => {
  const [selected, setSelected] =
    React.useState('1');
  return (
    <Screen
      name="SegmentedControl"
      title="SegmentedControl"
    >
      <Stack
        direction="vertical"
        paddingHorizontal="ExtraExtraLarge"
      >
        <SegmentedControl
          segments={[
            {
              id: '1',
              label: '1',
              disabled: false,
            },
            {
              id: '2',
              label: '2',
              disabled: false,
            },
            {
              id: '3',
              label: '3 (disabled)',
              disabled: true,
            },
          ]}
          selected={selected}
          onSelect={setSelected}
        />
      </Stack>
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => {
    return <SmartGridModal />;
  },
);
