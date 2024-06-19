import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.order-details.action.render', (root, api) => {
  const navigator = root.createComponent(Navigator);
  const screen = root.createComponent(Screen, {
    name: 'OrderDetailsAction',
    title: 'Order Details Action',
  });
  const scrollView = root.createComponent(ScrollView);
  const text = root.createComponent(Text);

  text.append(`ID for current order screen: ${api.order.id}`);
  scrollView.append(text);
  screen.append(scrollView);
  navigator.append(screen);
  root.append(navigator);
});
