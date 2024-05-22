import {
  extension,
  Screen,
  ScrollView,
  Stepper,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {name: 'stepper', title: 'Stepper'},
    );
    const scrollView =
      root.createComponent(ScrollView);
    const text = root.createComponent(
      Text,
      null,
      '4',
    );
    const stepper = root.createComponent(
      Stepper,
      {
        initialValue: 4,
        onValueChanged: (value) => {
          text.replaceChildren(value.toString());
        },
      },
    );

    scrollView.append(stepper);
    scrollView.append(text);
    mainScreen.append(scrollView);
    root.append(mainScreen);
  },
);
