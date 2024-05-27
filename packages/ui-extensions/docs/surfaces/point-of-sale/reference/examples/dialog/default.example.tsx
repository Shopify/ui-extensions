import React, {useState} from 'react';
import {
  Button,
  Dialog,
  Screen,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [visible, setVisible] = useState(false);

  const handlePrimaryAction = () => {
    setVisible(false);
    console.log('Primary action pressed');
  };

  const handleSecondaryAction = () => {
    setVisible(false);
    console.log('Secondary action pressed');
  };

  return (
    <Screen name="Dialog" title="Dialog Title">
      <Button
        title="Show dialog"
        onPress={() => setVisible(true)}
      />
      <Dialog
        type="error"
        title="Dialog title"
        content="Dialog content"
        actionText="Primary action"
        onAction={handlePrimaryAction}
        secondaryActionText="Secondary action"
        onSecondaryAction={handleSecondaryAction}
        isVisible={visible}
      />
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
