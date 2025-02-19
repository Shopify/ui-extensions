import {
  extension,
  Text,
  Icon,
  Screen,
  Stack,
  Selectable,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root) => {
  const label1 = root.createComponent(Text);
  label1.append('Hello world!');

  const label2 = root.createComponent(Text, {variant: 'captionRegular'});
  label2.append('This is an example of a nested stack!');

  const price = root.createComponent(Text);
  price.append("Let's go!");

  const icon = root.createComponent(Icon, {
    name: 'chevron-right',
  });

  const leftStack = root.createComponent(Stack, {
    direction: 'block',
    gap: '100',
  });
  leftStack.append(label1, label2);

  const rightStack = root.createComponent(Stack, {
    direction: 'inline',
    gap: '600',
    alignItems: 'center',
    alignContent: 'center',
  });
  rightStack.append(price, icon);

  const mainStack = root.createComponent(Stack, {
    direction: 'inline',
    gap: '400',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingInline: '450',
    paddingBlock: '600',
    inlineSize: '100%',
  });
  mainStack.append(leftStack, rightStack);

  const selectable = root.createComponent(Selectable, {
    onPress: () => console.log('Pressed'),
  });
  selectable.append(mainStack);

  const screen = root.createComponent(Screen, {
    name: 'Stack',
    title: 'Stack',
  });
  screen.append(selectable);
  root.append(screen);

  root.mount();
});
