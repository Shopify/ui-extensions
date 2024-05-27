import {
  Button,
  Dialog,
  Screen,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {
        name: 'Dialog',
        title: 'Dialog Title',
      },
    );

    const button = root.createComponent(Button, {
      title: 'Show dialog',
      onPress: () =>
        dialog.updateProps({visible: true}),
    });

    const handlePrimaryAction = () => {
      dialog.updateProps({visible: false});
      console.log('Primary action pressed');
    };

    const handleSecondaryAction = () => {
      dialog.updateProps({visible: false});
      console.log('Secondary action pressed');
    };

    const dialog = root.createComponent(Dialog, {
      type: 'error',
      title: 'Dialog title',
      content: 'Dialog content',
      actionText: 'Primary action',
      onAction: handlePrimaryAction,
      secondaryActionText: 'Secondary action',
      onSecondaryAction: handleSecondaryAction,
      isVisible: false,
    });

    mainScreen.append(button);
    mainScreen.append(dialog);
    root.append(mainScreen);
  },
);
