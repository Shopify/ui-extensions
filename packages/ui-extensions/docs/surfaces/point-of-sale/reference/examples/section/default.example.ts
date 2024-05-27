import {
  extension,
  Screen,
  ScrollView,
  Stack,
  Navigator,
  Text,
  Section,
  Selectable,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root, api) => {
    const screen = root.createComponent(Screen, {
      name: 'Section',
      title: 'Section',
    });

    const scrollView =
      root.createComponent(ScrollView);

    const section = root.createComponent(
      Section,
      {
        title: 'Section',
        action: {
          title: 'Show toast',
          onPress: () =>
            api.toast.show('Hello world!'),
        },
      },
    );

    for (let i = 1; i < 5; i++) {
      const selectable = root.createComponent(
        Selectable,
        {
          onPress: () =>
            api.toast.show(`Item ${i}!`),
        },
      );
      const stack = root.createComponent(Stack, {
        paddingVertical: 'Small',
        direction: 'vertical',
        paddingHorizontal: 'Small',
      });

      const textElement =
        root.createComponent(Text);
      textElement.append(`Item ${i}`);

      stack.append(textElement);
      selectable.append(stack);
      section.append(selectable);
    }

    const rootStack = root.createComponent(
      Stack,
      {
        paddingHorizontal: 'HalfPoint',
        direction: 'vertical',
      },
    );
    rootStack.append(section);

    scrollView.append(rootStack);
    screen.append(scrollView);
    const navigator =
      root.createComponent(Navigator);
    navigator.append(screen);
    root.append(navigator);
  },
);
