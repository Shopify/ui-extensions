import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-details.action.render',
  (root, api) => {
    const navigator = root.createComponent(Navigator);
    const screen = root.createComponent(Screen, {
      name: 'CartLineItem',
      title: 'Cart Line Item',
    });
    const scrollView = root.createComponent(ScrollView);
    const text = root.createComponent(Text);

    text.append(`Title for this line item: ${api.cartLineItem.title}`);
    scrollView.append(text);
    screen.append(scrollView);
    navigator.append(screen);
    root.append(navigator);
  },
);
