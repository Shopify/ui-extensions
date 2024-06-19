import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.action.render', (root, api) => {
  const navigator = root.createComponent(Navigator);
  const screen = root.createComponent(Screen, {
    name: 'HelloWorld',
    title: 'Hello World!',
  });
  const scrollView = root.createComponent(ScrollView);
  const text = root.createComponent(Text);

  text.append(`Order ID for complete checkout: ${api.order.id}`);
  scrollView.append(text);
  screen.append(scrollView);
  navigator.append(screen);
  root.append(navigator);
});
