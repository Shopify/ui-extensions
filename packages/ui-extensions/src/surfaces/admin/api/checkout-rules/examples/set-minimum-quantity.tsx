import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  NumberField,
  Button,
  Banner,
} from '@shopify/ui-extensions-react/admin';

const SetMinimumQuantity = () => {
  const {applyMetafieldChange} = useApi<'admin.settings.validation.render'>();
  const [quantity, setQuantity] = useState('3');
  const [result, setResult] = useState<{type: string; message?: string} | null>(null);

  const handleSave = async () => {
    const res = await applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'validation',
      key: 'minimum_quantity',
      value: quantity,
      valueType: 'number_integer',
    });

    setResult(res);
  };

  return (
    <>
      <NumberField
        label="Minimum quantity"
        value={quantity}
        onChange={setQuantity}
      />
      <Button title="Save Validation" onPress={handleSave} />
      {result?.type === 'success' && (
        <Banner status="success">Minimum quantity configured</Banner>
      )}
      {result?.type === 'error' && (
        <Banner status="critical">{result.message}</Banner>
      )}
    </>
  );
};

export default reactExtension(
  'admin.settings.validation.render',
  () => <SetMinimumQuantity />,
);
