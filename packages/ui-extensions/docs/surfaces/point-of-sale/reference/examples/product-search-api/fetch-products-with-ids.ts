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

  const fetchProducts = async () => {
    const results = await api.productSearch.fetchProductsWithIds([1, 2, 3, 4]);
    const data = results.fetchedResources.map((product): ListRow => {
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

    console.log('IDs not found: ', results.idsForResourcesNotFound);

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

  fetchProducts();
});
