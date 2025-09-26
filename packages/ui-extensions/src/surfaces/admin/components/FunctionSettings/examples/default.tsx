import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [percentage, setPercentage] = useState(
    shopify.data.metafields[0].value,
  );

  async function applyExtensionMetafieldChange() {
    await shopify.applyMetafieldChange({
      type: 'updateMetafield',
      namespace: '$app:discounts-percentage',
      key: 'function-configuration',
      value: percentage,
      valueType: 'integer',
    });
  }

  return (
    <s-function-settings
      onSubmit={(e) => e.waitUntil(applyExtensionMetafieldChange())}
      onReset={resetForm}
    >
      <s-number-field
        step="1"
        suffix="%"
        label="Percentage"
        name="percentage"
        value={shopify.data.metafields[0].value}
        onChange={(event) => setPercentage(event.currentTarget.value)}
      />
    </s-function-settings>
  );
}
