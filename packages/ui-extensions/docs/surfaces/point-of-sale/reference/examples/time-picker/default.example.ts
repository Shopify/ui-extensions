import {
  Button,
  TimePicker,
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
        timePicker.updateProps({
          visibleState: [true, () => {}],
        });
      },
    });

    const handleOnChange = (selected) => {
      timePicker.updateProps({
        selected: new Date(
          selected,
        ).toDateString(),
      });
    };

    const timePicker = root.createComponent(
      TimePicker,
      {
        visibleState: [false, () => {}],
        onChange: handleOnChange,
        selected: new Date().toDateString(),
        is24Hour: true,
        inputMode: 'spinner',
      },
    );

    mainScreen.append(button);
    mainScreen.append(timePicker);
    root.append(mainScreen);
  },
);
