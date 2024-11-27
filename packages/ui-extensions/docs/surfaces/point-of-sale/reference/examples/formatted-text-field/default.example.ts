import {
  extension,
  Screen,
  Navigator,
  ScrollView,
  Text,
  FormattedTextField,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const homeScreen = root.createComponent(
      Screen,
      {
        name: 'FormattedTextField',
        title: 'FormattedTextField Example',
      },
    );

    const text = root.createComponent(Text);

    const textField = root.createComponent(
      FormattedTextField,
      {
        placeholder: 'Email address',
        inputType: 'email',
        onChangeText: (newText) => {
          text.replaceChildren(newText);
        },
      },
    );

    const scrollView =
      root.createComponent(ScrollView);

    homeScreen.append(scrollView);
    scrollView.append(textField);
    scrollView.append(text);

    const navigator =
      root.createComponent(Navigator);
    navigator.append(homeScreen);
    root.append(navigator);
  },
);
