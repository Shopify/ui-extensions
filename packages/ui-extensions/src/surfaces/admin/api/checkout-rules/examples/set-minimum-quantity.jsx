import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [quantity, setQuantity] = useState('3');
  const [result, setResult] = useState(null);

  const handleSave = async () => {
    const res = await shopify.applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'validation',
      key: 'minimum_quantity',
      value: quantity,
      valueType: 'number_integer',
    });

    setResult(res);
  };

  return (
    <s-function-settings>
      <s-number-field
        label="Minimum quantity"
        value={quantity}
        onChange={(value) => setQuantity(value)}
      />
      <s-button onClick={handleSave}>Save Validation</s-button>
      {result?.type === 'success' && (
        <s-banner status="success">Minimum quantity configured</s-banner>
      )}
      {result?.type === 'error' && (
        <s-banner status="critical">{result.message}</s-banner>
      )}
    </s-function-settings>
  );
}
