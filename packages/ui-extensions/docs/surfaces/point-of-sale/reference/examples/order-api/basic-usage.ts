import {
  extension,
  Screen,
  ScrollView,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.action.render', (root, api) => {
  const order = api.order;

  const screen = root.createComponent(Screen, {
    name: 'PostPurchaseAction',
    title: 'Post Purchase Action',
  });

  const scrollView = root.createComponent(ScrollView, {});

  const orderName = root.createComponent(Text, {}, `Order Name: ${order.name}`);
  const orderId = root.createComponent(Text, {}, `Order ID: ${order.id}`);
  const orderCustomerId = root.createComponent(
    Text,
    {},
    `Order Customer ID: ${order.customerId}`,
  );

  scrollView.append(orderName);
  scrollView.append(orderId);
  scrollView.append(orderCustomerId);

  screen.append(scrollView);

  root.append(screen);

  root.mount();
});
