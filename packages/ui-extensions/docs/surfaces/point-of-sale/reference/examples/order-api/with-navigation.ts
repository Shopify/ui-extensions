import {
  extension,
  Navigator,
  Screen,
  Text,
  Button,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.action.render', (root, api) => {
  const order = api.order;
  const navigation = api.navigation;

  const navigator = root.createComponent(Navigator, {});
  const screen = navigator.createComponent(Screen, {
    name: 'OrderActions',
    title: 'Order Actions',
  });

  screen.createComponent(Text, {}, `Processing order: ${order.name}`);

  if (order.customerId) {
    screen.createComponent(Button, {
      title: 'View Customer',
      onPress: () => {
        navigation.navigate('CustomerDetails', {
          customerId: order.customerId,
        });
      },
    });
  }

  root.mount();
});
