import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  EmailField,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const clearHandler = () => {
    emailField.updateProps({value: ''});
    textBox.replaceChildren('');
  };
  const emailField = root.createComponent(EmailField, {
    label: 'Email',
    value: '',
    action: {label: 'Clear', onPress: clearHandler},
  });

  const textBox = root.createComponent(Text);

  const onChangeHandler = (newValue: string) => {
    emailField.updateProps({value: newValue});

    const textContent = `Selected Date: ${newValue}`;
    textBox.replaceChildren(textContent);
  };

  emailField.updateProps({onChange: onChangeHandler});

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(emailField);
  scrollView.append(textBox);

  const screen = root.createComponent(Screen, {
    name: 'DateField',
    title: 'Date Field Example',
  });
  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
