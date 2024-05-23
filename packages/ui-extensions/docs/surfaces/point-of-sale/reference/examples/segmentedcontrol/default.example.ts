import {
  extension,
  Screen,
  ScrollView,
  SegmentedControl,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {
        name: 'SegmentedControl',
        title: 'SegmentedControl',
      },
    );
    const scrollView =
      root.createComponent(ScrollView);

    const onSelect = (id: string) => {
      segmentedControl.updateProps({
        selected: id,
      });
    };

    const segmentedControl = root.createComponent(
      SegmentedControl,
      {
        onSelect,
        selected: '1',
        segments: [
          {id: '1', label: '1', disabled: false},
          {id: '2', label: '2', disabled: false},
          {
            id: '3',
            label: '3 (disabled)',
            disabled: true,
          },
        ],
      },
    );

    scrollView.append(segmentedControl);

    mainScreen.append(scrollView);
    root.append(mainScreen);
  },
);
