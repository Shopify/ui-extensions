import {
  extension,
  Screen,
  ScrollView,
  Stack,
  Navigator,
  SectionHeader,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root, api) => {
    const screen = root.createComponent(Screen, {
      name: 'SectionHeader',
      title: 'SectionHeader',
    });

    const scrollView =
      root.createComponent(ScrollView);

    const defaultSectionHeader = root.createComponent(
      SectionHeader,
      {
        title: 'Default',
      },
    );

    const actionSectionHeader =
      root.createComponent(SectionHeader, {
        title: 'With action',
        action: {
          label: 'Show toast',
          onPress: () =>
            api.toast.show('Hello world!'),
        },
      });

    const noDividerSectionHeader =
      root.createComponent(SectionHeader, {
        title: 'Without divider',
        hideDivider: true,
      });

    const rootStack = root.createComponent(
      Stack,
      {
        paddingHorizontal: 'HalfPoint',
        direction: 'vertical',
      },
    );
    rootStack.append(defaultSectionHeader);
    rootStack.append(actionSectionHeader);
    rootStack.append(noDividerSectionHeader);
    
    scrollView.append(rootStack);
    screen.append(scrollView);
    const navigator =
      root.createComponent(Navigator);
    navigator.append(screen);
    root.append(navigator);
  },
);
