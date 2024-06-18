import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.draft-order-details.action.render',
  (root, api) => {
    const navigator = root.createComponent(Navigator);
    const screen = root.createComponent(Screen, {
      name: 'DraftOrderDetailsAction',
      title: 'Draft Order Details Action',
    });
    const scrollView = root.createComponent(ScrollView);
    const text = root.createComponent(Text);

    text.append(`ID for current draft order screen: ${api.draftOrder.id}`);
    scrollView.append(text);
    screen.append(scrollView);
    navigator.append(screen);
    root.append(navigator);
  },
);
