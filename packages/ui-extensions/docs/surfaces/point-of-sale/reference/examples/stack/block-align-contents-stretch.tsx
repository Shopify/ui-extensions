import {
  Stack,
  SegmentedControl,
  Screen,
} from '@shopify/ui-extensions/point-of-sale';

export function BlockStackAlignContentsStretch() {
  return (
    <Screen name="Stack" title="Stack">
      <Stack direction="block" gap="400" alignContent="stretch" padding="400">
        <SegmentedControl
          selected="one"
          segments={[
            {id: '1', label: 'One', disabled: false},
            {id: '2', label: 'Two', disabled: false},
            {id: '3', label: 'Three', disabled: false},
            {id: '4', label: 'Four', disabled: false},
            {id: '5', label: 'Five', disabled: false},
            {id: '6', label: 'Six', disabled: false},
            {id: '7', label: 'Seven', disabled: false},
          ]}
          onSelect={(id: string) =>
            console.log(`Selected segment with id: ${id}`)
          }
        />
      </Stack>
    </Screen>
  );
}
