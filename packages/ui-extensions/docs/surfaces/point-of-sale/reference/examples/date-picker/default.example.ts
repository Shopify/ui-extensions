import {
  Button,
  DatePicker,
  Screen,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {
        name: 'Home',
        title: 'Home',
      },
    );

    const button = root.createComponent(Button, {
      title: 'Show',
      onPress: () => {
        datePicker.updateProps({
          visibleState: [true, () => {}],
        });
      },
    });

    const handleOnChange = (selected) => {
      datePicker.updateProps({
        selected: new Date(
          selected,
        ).toDateString(),
      });
    };

    const datePicker = root.createComponent(
      DatePicker,
      {
        visibleState: [false, () => {}],
        onChange: handleOnChange,
        selected: new Date().toDateString(),
        inputMode: 'spinner',
      },
    );

    mainScreen.append(button);
    mainScreen.append(datePicker);
    root.append(mainScreen);
  },
);
