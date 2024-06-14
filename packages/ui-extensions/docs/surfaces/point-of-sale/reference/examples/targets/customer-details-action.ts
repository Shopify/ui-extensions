import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.customer-details.action.render', (root, api) => {
  const navigator = root.createComponent(Navigator);
  const screen = root.createComponent(Screen, {
    name: 'CustomerDetails',
    title: 'Customer Details',
  });
  const scrollView = root.createComponent(ScrollView);
  const text = root.createComponent(Text);

  text.append(`Customer ID: ${api.customer.id}`);
  scrollView.append(text);
  screen.append(scrollView);
  navigator.append(screen);
  root.append(navigator);
});
