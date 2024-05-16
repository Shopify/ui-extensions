import {
  extension,
  Screen,
  Navigator,
  Text,
  Button,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const homeScreen = root.createComponent(Screen, {
    name: 'Home',
    title: 'Home',
  });

  const homeText = root.createComponent(Text);
  homeText.append('Home screen');
  homeScreen.append(homeText);

  const navigateButton = root.createComponent(Button, {
    title: 'Navigate to details',
    onPress: () => api.navigation.navigate('Details', {orderId: '123'}),
  });
  homeScreen.append(navigateButton);

  const detailsText = root.createComponent(Text);

  const detailsScreen = root.createComponent(Screen, {
    name: 'Details',
    title: 'Details',
    onReceiveParams: (params) => {
      detailsText.replaceChildren(`Order ID: ${params.orderId}`);
    },
  });

  detailsScreen.append(detailsText);

  const navigator = root.createComponent(Navigator);
  navigator.append(homeScreen);
  navigator.append(detailsScreen);
  root.append(navigator);
});
