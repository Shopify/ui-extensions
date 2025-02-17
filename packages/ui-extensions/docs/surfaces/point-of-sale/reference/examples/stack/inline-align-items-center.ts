import {
  extension,
  Button,
  Screen,
  Stack,
  ScrollView,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root) => {
  const button1 = root.createComponent(Button, {
    title: 'Hello',
  });

  const button2 = root.createComponent(Button, {
    title: 'Hello',
  });

  const button3 = root.createComponent(Button, {
    title: 'Hello',
  });

  const innerStack = root.createComponent(Stack, {
    direction: 'block',
    gap: '200',
  });
  innerStack.append(button1, button2);

  const mainStack = root.createComponent(Stack, {
    direction: 'inline',
    gap: '200',
    alignItems: 'center',
    alignContent: 'center',
  });
  mainStack.append(innerStack, button3);

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(mainStack);

  const screen = root.createComponent(Screen, {
    name: 'Stack',
    title: 'Stack',
  });
  screen.append(scrollView);
  root.append(screen);

  root.mount();
});
