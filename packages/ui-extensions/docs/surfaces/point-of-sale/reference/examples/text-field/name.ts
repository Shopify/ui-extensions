import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  TextField,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const textField = root.createComponent(TextField, {
    label: 'Name',
    placeholder: 'Input your name here',
    required: true,
    value: '',
  });

  const textBox = root.createComponent(Text);

  const onChangeHandler = (newValue: string) => {
    textField.updateProps({value: newValue});

    const greeting = newValue ? `Hello ${newValue}!` : '';
    textBox.replaceChildren(greeting);
  };

  textField.updateProps({onChange: onChangeHandler});

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(textField);
  scrollView.append(textBox);

  const screen = root.createComponent(Screen, {
    name: 'TextField',
    title: 'Text Field Example',
  });
  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
