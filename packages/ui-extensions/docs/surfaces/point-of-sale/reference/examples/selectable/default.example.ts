import {
  extension,
  Screen,
  ScrollView,
  Selectable,
  Stepper,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    let value = 0;

    const mainScreen = root.createComponent(
      Screen,
      {name: 'selectable', title: 'Selectable'},
    );
    const scrollView =
      root.createComponent(ScrollView);
    const text = root.createComponent(
      Text,
      null,
      value.toString(),
    );
    const selectable = root.createComponent(
      Selectable,
      {
        onPress: () => {
          value += 1;
          text.replaceChildren(value.toString());
        },
      },
    );

    selectable.append(text);
    scrollView.append(selectable);
    mainScreen.append(scrollView);
    root.append(mainScreen);
  },
);
