import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  DateField,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const clearHandler = () => {
    dateField.updateProps({value: ''});
    textBox.replaceChildren('');
  };
  const dateField = root.createComponent(DateField, {
    label: 'Select Date',
    value: '',
    action: {label: 'Clear', onPress: clearHandler},
  });

  const textBox = root.createComponent(Text);

  const onChangeHandler = (newValue: string) => {
    dateField.updateProps({value: newValue});

    const textContent = `Selected Date: ${newValue}`;
    textBox.replaceChildren(textContent);
  };

  dateField.updateProps({onChange: onChangeHandler});

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(dateField);
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
