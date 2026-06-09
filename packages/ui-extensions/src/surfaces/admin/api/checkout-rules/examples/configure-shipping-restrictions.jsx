import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [countries, setCountries] = useState('US, CA, GB');
  const [errorMsg, setErrorMsg] = useState('Shipping not available to your location');

  const handleSave = async () => {
    const blockedCountries = countries.split(',').map((c) => c.trim());

    await shopify.applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'validation',
      key: 'blocked_shipping_countries',
      value: JSON.stringify(blockedCountries),
      valueType: 'json',
    });

    await shopify.applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'validation',
      key: 'error_message',
      value: errorMsg,
      valueType: 'single_line_text_field',
    });
  };

  return (
    <s-function-settings>
      <s-stack direction="block">
        <s-text-field
          label="Blocked countries (comma-separated)"
          value={countries}
          onChange={(value) => setCountries(value)}
        />
        <s-text-field
          label="Error message"
          value={errorMsg}
          onChange={(value) => setErrorMsg(value)}
        />
        <s-button onClick={handleSave}>Save Restrictions</s-button>
        <s-text>Validation ID: {data.validation?.id}</s-text>
        <s-text>Function ID: {data.shopifyFunction.id}</s-text>
      </s-stack>
    </s-function-settings>
  );
}
