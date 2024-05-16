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

  const fetchProductVariants = async () => {
    const results =
      await api.productSearch.fetchPaginatedProductVariantsWithProductId(1, {
        first: 10,
      });
    const data = results.items.map((variant): ListRow => {
      return {
        id: String(variant.id),
        leftSide: {
          label: variant.title,
          image: {
            source: variant.image,
          },
        },
      };
    });

    console.log('Cursor for next page: ', results.lastCursor);

    list.updateProps({data});
  };

  const screen = root.createComponent(Screen, {
    title: 'Home',
    name: 'Home',
  });

  screen.append(list);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);

  fetchProductVariants();
});
