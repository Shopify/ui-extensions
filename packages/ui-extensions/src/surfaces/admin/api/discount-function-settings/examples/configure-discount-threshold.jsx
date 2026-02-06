import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [threshold, setThreshold] = useState('50.00');
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    const result = await shopify.applyMetafieldChange({
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
    <s-function-settings>
      <s-text-field
        label="Minimum purchase amount"
        value={threshold}
        onChange={(value) => setThreshold(value)}
      />
      <s-button onClick={handleSave}>Save Threshold</s-button>
      {saved && <s-banner status="success">Threshold configured!</s-banner>}
    </s-function-settings>
  );
}
