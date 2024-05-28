import {
  extension,
  RadioButtonList,
  Screen,
  ScrollView,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {
        name: 'RadioButtonList',
        title: 'RadioButtonList',
      },
    );
    const scrollView =
      root.createComponent(ScrollView);

    const text = root.createComponent(Text);

    const radioButtonList = root.createComponent(
      RadioButtonList,
      {
        items: ['1', '2', '3'],
        onItemSelected: (selected) => {
          text.replaceChildren(selected);
          radioButtonList.updateProps({
            initialSelectedItem: selected,
          });
        },
      },
    );

    scrollView.append(radioButtonList);
    scrollView.append(text);

    mainScreen.append(scrollView);
    root.append(mainScreen);
  },
);
