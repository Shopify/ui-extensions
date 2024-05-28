import {
  extension,
  Screen,
  ScrollView,
  SearchBar,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {name: 'SearchBar', title: 'SearchBar'},
    );
    const scrollView =
      root.createComponent(ScrollView);
    const text = root.createComponent(Text, null);

    const onSearch = (value: string) => {
      text.replaceChildren(`Searched: ${value}`);
    };

    const searchBar = root.createComponent(
      SearchBar,
      {
        onSearch,
        editable: true,
        initialValue: 'initial value',
        placeholder: 'placeholder',
      },
    );

    scrollView.append(searchBar);
    scrollView.append(text);

    mainScreen.append(scrollView);
    root.append(mainScreen);
  },
);
