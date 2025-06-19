import {
  extension,
  Screen,
  Navigator,
  ScrollView,
  Text,
  Section,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.block.render', (root, api) => {
  // Access order information from the API
  const order = api.order;

  const navigator = root.createComponent(Navigator, {});
  const screen = navigator.createComponent(Screen, {
    name: 'OrderDetails',
    title: 'Order Details',
  });
  const scrollView = screen.createComponent(ScrollView, {});
  const section = scrollView.createComponent(Section, {
    title: 'Order Information',
  });

  section.createComponent(Text, {}, `Order ID: ${order.id}`);
  section.createComponent(Text, {}, `Order Name: ${order.name}`);

  if (order.customerId) {
    section.createComponent(Text, {}, `Customer ID: ${order.customerId}`);
  }

  root.mount();
});
