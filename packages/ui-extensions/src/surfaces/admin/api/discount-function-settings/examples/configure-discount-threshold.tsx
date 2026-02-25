import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  TextField,
  Button,
  Banner,
} from '@shopify/ui-extensions-react/admin';

const ConfigureDiscountThreshold = () => {
  const {applyMetafieldChange} = useApi<'admin.discount-details.function-settings.render'>();
  const [threshold, setThreshold] = useState('50.00');
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    const result = await applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'discount-config',
      key: 'minimum_purchase',
      value: threshold,
      valueType: 'number_decimal',
    });

    if (result.type === 'success') {
      setSaved(true);
    } else {
      console.error('Configuration failed:', result.message);
    }
  };

  return (
    <>
      <TextField
        label="Minimum purchase amount"
        value={threshold}
        onChange={setThreshold}
      />
      <Button title="Save Threshold" onPress={handleSave} />
      {saved && <Banner status="success">Threshold configured!</Banner>}
    </>
  );
};

export default reactExtension(
  'admin.discount-details.function-settings.render',
  () => <ConfigureDiscountThreshold />,
);
