import {
  SearchBar,
  Screen,
  Navigator,
  extension,
  ListRow,
  List,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const list = root.createComponent(List, {
    imageDisplayStrategy: 'always',
    data: [],
  });

  const fetchProductVariant = async () => {
    const resultProductVariant =
      await api.productSearch.fetchProductVariantWithId(1);
    if (resultProductVariant) {
      const listItem = {
        id: String(resultProductVariant.id),
        leftSide: {
          label: resultProductVariant.title,
          image: {
            source: resultProductVariant.image,
          },
        },
      };

      list.updateProps({data: [listItem]});
    }
  };

  const screen = root.createComponent(Screen, {
    title: 'Home',
    name: 'Home',
  });

  screen.append(list);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);

  fetchProductVariant();
});
