import {
  extension,
  Screen,
  ScrollView,
  Stack,
  Navigator,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const screen = root.createComponent(Screen, {
      name: 'ScrollView',
      title: 'ScrollView',
    });

    const scrollView =
      root.createComponent(ScrollView);

    for (let i = 0; i < 25; i++) {
      const stack = root.createComponent(Stack, {
        paddingVertical: 'Small',
        direction: 'vertical',
        paddingHorizontal: 'Small',
      });

      const textElement =
        root.createComponent(Text);
      textElement.append(`Text element ${i}`);

      stack.append(textElement);
      scrollView.append(stack);
    }

    screen.append(scrollView);
    const navigator =
      root.createComponent(Navigator);
    navigator.append(screen);
    root.append(navigator);
  },
);
