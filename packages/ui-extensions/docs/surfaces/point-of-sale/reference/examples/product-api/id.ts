import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.product-details.action.render', (root, api) => {
  const navigator = root.createComponent(Navigator);
  const screen = root.createComponent(Screen, {
    name: 'ProductApi',
    title: 'Product Api',
  });
  const scrollView = root.createComponent(ScrollView);
  const text = root.createComponent(Text);

  text.append(`Product ID: ${api.product.id}`);
  scrollView.append(text);
  screen.append(scrollView);
  navigator.append(screen);
  root.append(navigator);
});
