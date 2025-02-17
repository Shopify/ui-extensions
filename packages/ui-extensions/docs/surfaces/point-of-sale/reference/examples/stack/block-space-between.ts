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

  const button3 = root.createComponent(Button, {
    title: 'Hello',
  });

  const stack = root.createComponent(Stack, {
    direction: 'block',
    gap: '200',
    justifyContent: 'space-between',
    blockSize: '50%',
    paddingInline: '450',
  });
  stack.append(button1, button2, button3);

  const screen = root.createComponent(Screen, {
    name: 'Stack',
    title: 'Stack',
  });
  screen.append(stack);
  root.append(screen);

  root.mount();
});
