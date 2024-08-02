import {
  Navigator,
  Screen,
  List,
  Text,
  ScrollView,
  Section,
  ListRowSubtitle,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  let showDetails = false;
  const section = root.createComponent(Section, {
    title: 'Our T-shirts',
  });

  const scrollView = root.createComponent(ScrollView);

  const triggerShowDetails = () => {
    showDetails = !showDetails;
    if (showDetails) {
      scrollView.append(section);
    } else {
      scrollView.removeChild(section);
    }
  };

  const listData = [
    {
      id: 'graphicTees',
      leftSide: {
        label: 'Graphic Tees',
        subtitle: [{content: 'Summer Collection'}, {content: 'Unisex'}] as [
          ListRowSubtitle,
          ListRowSubtitle?,
        ],
      },
      rightSide: {
        label: 'Product details',
        showChevron: true,
      },
      onPress: () => triggerShowDetails(),
    },
    {
      id: 'denimShorts',
      leftSide: {
        label: 'Denim Shorts',
        subtitle: [{content: 'Summer Collection'}, {content: 'Denim'}] as [
          ListRowSubtitle,
          ListRowSubtitle?,
        ],
      },
    },
  ];

  const list = root.createComponent(List, {
    title: 'Products',
    data: listData,
  });

  const textBlock = root.createComponent(
    Text,
    null,
    'Our shirts are made with 100% organic cotton!',
  );

  section.append(textBlock);

  const screen = root.createComponent(Screen, {
    name: 'ProductList',
    title: 'Product List',
  });

  screen.append(list);

  if (showDetails) {
    scrollView.append(section);
  }

  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
