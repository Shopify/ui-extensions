import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  NumberField,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const clearHandler = () => {
    numberField.updateProps({value: ''});
    textBox.replaceChildren('');
  };
  const numberField = root.createComponent(NumberField, {
    label: 'Number',
    placeholder: '1234',
    helpText: 'Enter a numeric value.',
    value: '',
    action: {label: 'Clear', onPress: clearHandler},
  });

  const textBox = root.createComponent(Text);

  const onChangeHandler = (newValue: string) => {
    numberField.updateProps({value: newValue});

    const textContent = `Selected Date: ${newValue}`;
    textBox.replaceChildren(textContent);
  };

  numberField.updateProps({onChange: onChangeHandler});

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(numberField);
  scrollView.append(textBox);

  const screen = root.createComponent(Screen, {
    name: 'NumberField',
    title: 'Number Field Example',
  });
  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
