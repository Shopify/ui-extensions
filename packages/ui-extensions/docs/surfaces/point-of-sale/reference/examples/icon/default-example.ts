import {
  Navigator,
  Screen,
  ScrollView,
  Icon,
  IconName,
  IconSize,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const iconsData: {name: IconName; size: IconSize}[] = [
    {name: 'call', size: 's', tone: 'icon-success'},
    {name: 'card-reader', size: 'l'},
    {name: 'circle-cancel', size: 'xl', tone: 'icon-critical'},
    {name: 'orders-filled', size: 's'},
    {name: 'star', size: 'm'},
  ];
  const scrollView = root.createComponent(ScrollView);

  iconsData.forEach((iconData) => {
    const icon = root.createComponent(Icon, {
      name: iconData.name,
      size: iconData.size,
    });
    scrollView.append(icon);
  });

  const screen = root.createComponent(Screen, {
    name: 'Icon',
    title: 'Icon Example',
  });
  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
