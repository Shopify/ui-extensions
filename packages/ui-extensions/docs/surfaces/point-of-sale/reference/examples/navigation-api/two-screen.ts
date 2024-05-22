import {
  extension,
  Button,
  Navigator,
  Screen,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  let navigator = root.createComponent(Navigator);

  let screenOne = root.createComponent(Screen, {
    name: 'ScreenOne',
    title: 'Screen One Title',
  });

  let screenTwo = root.createComponent(Screen, {
    name: 'ScreenTwo',
    title: 'Screen Two Title',
  });

  let navigateScreenOneBtn = root.createComponent(Button, {
    title: 'Navigate to Screen One',
    onPress: () => api.navigation.navigate('ScreenOne'),
  });

  let navigateScreenTwoBtn = root.createComponent(Button, {
    title: 'Navigate to Screen Two',
    onPress: () => api.navigation.navigate('ScreenTwo'),
  });

  screenOne.appendChild(navigateScreenTwoBtn);
  screenTwo.appendChild(navigateScreenOneBtn);
  navigator.appendChild(screenOne);
  navigator.appendChild(screenTwo);
  root.appendChild(navigator);
});
