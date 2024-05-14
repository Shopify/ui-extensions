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

  const search = async (queryString?: string) => {
    const results = await api.productSearch.searchProducts({queryString});
    const data = results.items.map((product): ListRow => {
      return {
        id: String(product.id),
        leftSide: {
          label: product.title,
          image: {
            source: product.featuredImage,
          },
        },
      };
    });

    list.updateProps({data});
  };

  const searchBar = root.createFragment();

  searchBar.append(
    root.createComponent(SearchBar, {
      placeholder: 'Search products',
      onTextChange: search,
      onSearch: search,
    }),
  );

  list.updateProps({listHeaderComponent: searchBar});

  const screen = root.createComponent(Screen, {
    title: 'Home',
    name: 'Home',
  });

  screen.append(list);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
