import React from 'react';
import {
  CameraScanner,
  Screen,
  Text,
  useScannerDataSubscription,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const {data} = useScannerDataSubscription();

  return (
    <Screen
      name="CameraScanner"
      title="Camera Scanner Title"
    >
      <CameraScanner />
      <Text>{`Scanned data: ${data || ''}`}</Text>
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
