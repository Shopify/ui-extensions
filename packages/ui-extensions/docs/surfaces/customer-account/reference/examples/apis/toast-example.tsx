import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Select,
  Modal,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.page.render', () => (
  <Extension />
));
function Extension() {
  const [selectedAddress, setSelectedAddress] = useState();
  const [pickupAddress, setPickupAddress] = useState();
  const {i18n, ui} = useApi<'customer-account.page.render'>();
  return (
    <Modal>
      <Select
        onChange={(value) => {
          setSelectedAddress(value);
        }}
        label="Pickup Address Options"
        value="1"
        options={[
          {
            value: '1',
            label: 'Address 1',
          },
          {
            value: '2',
            label: 'Address 2',
          },
          {
            value: '3',
            label: 'Address 3',
          },
          {
            value: '4',
            label: 'Address 4',
          },
        ]}
      />
      <Button
        onPress={() => {
          setPickupAddress(selectedAddress);
          ui.toast.show('Selection saved');
        }}
      >
        Save
      </Button>
    </Modal>
  );
}
