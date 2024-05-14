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

  const fetchProduct = async () => {
    const resultProduct = await api.productSearch.fetchProductWithId(1);
    if (resultProduct) {
      const listItem = {
        id: String(resultProduct.id),
        leftSide: {
          label: resultProduct.title,
          image: {
            source: resultProduct.featuredImage,
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

  fetchProduct();
});
