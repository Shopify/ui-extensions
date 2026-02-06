import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [distance, setDistance] = useState('50');
  const [enableInventory, setEnableInventory] = useState(true);

  const handleSave = () => {
    shopify.applyMetafieldsChange([
      {
        type: 'updateMetafield',
        namespace: 'routing',
        key: 'max_distance_km',
        value: distance,
        valueType: 'number_integer',
      },
      {
        type: 'updateMetafield',
        namespace: 'routing',
        key: 'enable_inventory_check',
        value: String(enableInventory),
        valueType: 'boolean',
      },
      {
        type: 'updateMetafield',
        namespace: 'routing',
        key: 'excluded_zip_codes',
        value: JSON.stringify(['10001', '90210']),
        valueType: 'json',
      },
    ]);
  };

  return (
    <s-function-settings>
      <s-stack direction="block">
        <s-number-field
          label="Maximum distance (km)"
          value={distance}
          onChange={(value) => setDistance(value)}
        />
        <s-checkbox
          checked={enableInventory}
          onChange={(checked) => setEnableInventory(checked)}
        >
          Enable inventory check
        </s-checkbox>
        <s-button onClick={handleSave}>Save Routing Criteria</s-button>
      </s-stack>
    </s-function-settings>
  );
}
