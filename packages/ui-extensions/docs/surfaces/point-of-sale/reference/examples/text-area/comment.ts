import {
  Tile,
  TextArea,
  Text,
  Screen,
  ScrollView,
  Navigator,
  useApi,
  extension,
} from '@shopify/ui-extensions-react/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const textArea = root.createComponent(TextArea, {
    label: 'Comments',
    placeholder: 'Input your comments here',
    required: true,
    value: '',
  });

  const textBox = root.createComponent(Text);

  const onChangeHandler = (newValue: string) => {
    textArea.updateProps({value: newValue});
    textBox.replaceChildren(newValue);
  };

  textArea.updateProps({onChange: onChangeHandler});

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(textArea);
  scrollView.append(textBox);

  const screen = root.createComponent(Screen, {
    name: 'TextArea',
    title: 'Text Area Example',
  });
  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
