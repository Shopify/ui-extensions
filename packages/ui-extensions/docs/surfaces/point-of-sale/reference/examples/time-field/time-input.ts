import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  TimeField,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const timeField = root.createComponent(TimeField, {
    label: 'Select Time',
    value: '',
  });

  const textBox = root.createComponent(Text);

  const onChangeHandler = (newValue: string) => {
    timeField.updateProps({value: newValue});

    const textContent = `Selected Time: ${newValue}`;
    textBox.replaceChildren(textContent);
  };

  timeField.updateProps({onChange: onChangeHandler});

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(timeField);
  scrollView.append(textBox);

  const screen = root.createComponent(Screen, {
    name: 'TimeField',
    title: 'Time Field Example',
  });
  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
