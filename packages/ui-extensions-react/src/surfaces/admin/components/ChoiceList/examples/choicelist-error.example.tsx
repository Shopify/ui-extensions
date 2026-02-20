import {useState} from 'react';
import {reactExtension, useApi, ChoiceList, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [region, setRegion] = useState('');
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <ChoiceList
        name="complianceRegion"
        value={region}
        error={error}
        choices={[
          {label: 'North America (FDA, FTC)', id: 'na'},
          {label: 'European Union (CE, REACH)', id: 'eu'},
          {label: 'Asia-Pacific (JIS, CCC)', id: 'apac'},
        ]}
        onChange={(value) => {
          setRegion(value);
          setError(undefined);
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (!region) {
            setError('Select a compliance region before saving');
            return;
          }
          await fetch('/api/products/compliance', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, complianceRegion: region}),
          });
          close();
        }}
      >
        Set compliance region
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
