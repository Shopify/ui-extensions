import {
  extension,
  SegmentedControl,
  Screen,
  Stack,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root) => {
  const segmentedControl = root.createComponent(SegmentedControl, {
    segments: [
      {id: '1', label: 'Segment 1', disabled: false},
      {id: '2', label: 'Segment 2', disabled: false},
      {id: '3', label: 'Segment 3', disabled: false},
      {id: '4', label: 'Segment 4', disabled: false},
      {id: '5', label: 'Segment 5', disabled: false},
      {id: '6', label: 'Segment 6', disabled: false},
      {id: '7', label: 'Segment 7', disabled: false},
    ],
    selected: '1',
    onSelect: (id: string) => {
      console.log(`Selected segment with id: ${id}`);
    },
  });
  const stack = root.createComponent(Stack);
  stack.append(segmentedControl);
  const screen = root.createComponent(Screen, {
    name: 'Stack',
    title: 'Stack',
  });
  screen.append(stack);
  root.append(screen);

  root.mount();
});
