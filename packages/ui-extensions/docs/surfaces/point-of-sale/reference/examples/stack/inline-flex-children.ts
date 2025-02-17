import {
  extension,
  Button,
  Screen,
  Stack,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root) => {
  const button1 = root.createComponent(Button, {
    title: 'Hello',
  });

  const button2 = root.createComponent(Button, {
    title: 'Hello',
  });

  const stack = root.createComponent(Stack, {
    direction: 'inline',
    gap: '200',
    flexChildren: true,
  });
  stack.append(button1, button2);

  const screen = root.createComponent(Screen, {
    name: 'Stack',
    title: 'Stack',
  });
  screen.append(stack);
  root.append(screen);

  root.mount();
});
