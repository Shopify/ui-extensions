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
    {name: 'call', size: 'minor'},
    {name: 'card-reader', size: 'major'},
    {name: 'circle-cancel', size: 'spot'},
    {name: 'orders', size: 'caption'},
    {name: 'star', size: 'badge'},
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
