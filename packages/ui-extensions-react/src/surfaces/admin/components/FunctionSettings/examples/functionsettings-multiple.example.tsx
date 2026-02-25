import {useState} from 'react';
import {reactExtension, useApi, FunctionSettings, TextField, NumberField, Section} from '@shopify/ui-extensions-react/admin';

export default reactExtension(
  'admin.settings.validation.render',
  async (api) => {
    const initialSettings = api.data.validation
      ? await fetchSettings(api.data.validation.id)
      : {};
    return <App settings={initialSettings} />;
  },
);

function App({settings}) {
  const [min, setMin] = useState(settings.minQuantity || 1);
  const [max, setMax] = useState(settings.maxQuantity || 100);
  const [message, setMessage] = useState(settings.errorMessage || '');
  const [error, setError] = useState();
  const {applyMetafieldsChange} = useApi();

  return (
    <FunctionSettings onError={(errors) => setError(errors[0]?.message)}>
      <Section heading="Quantity limits">
        <NumberField
          label="Minimum order quantity"
          name="minQuantity"
          min={1}
          value={min}
          error={error}
          onChange={(value) => {
            setMin(value);
            applyMetafieldsChange({
              type: 'updateMetafield',
              namespace: '$app:validation',
              key: 'min_quantity',
              value: String(value),
              valueType: 'number_integer',
            });
          }}
        />
        <NumberField
          label="Maximum order quantity"
          name="maxQuantity"
          min={1}
          value={max}
          onChange={(value) => {
            setMax(value);
            applyMetafieldsChange({
              type: 'updateMetafield',
              namespace: '$app:validation',
              key: 'max_quantity',
              value: String(value),
              valueType: 'number_integer',
            });
          }}
        />
        <TextField
          label="Error message shown to customers"
          name="errorMessage"
          value={message}
          onChange={(value) => {
            setMessage(value);
            applyMetafieldsChange({
              type: 'updateMetafield',
              namespace: '$app:validation',
              key: 'error_message',
              value,
              valueType: 'single_line_text_field',
            });
          }}
        />
      </Section>
    </FunctionSettings>
  );
}
