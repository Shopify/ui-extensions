import {useState} from 'react';
import {reactExtension, useApi, FunctionSettings, TextField, ChoiceList, Section, BlockStack} from '@shopify/ui-extensions-react/admin';

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
  const [title, setTitle] = useState(settings.title || '');
  const [type, setType] = useState(settings.type || 'percentage');
  const [error, setError] = useState();
  const {applyMetafieldsChange} = useApi();

  return (
    <FunctionSettings
      onSave={async () => {
        await fetch('/api/functions/validate-config', {method: 'POST'});
      }}
      onError={(errors) => setError(errors[0]?.message)}
    >
      <Section heading="Discount configuration">
        <BlockStack gap>
          <TextField
            label="Discount title"
            name="title"
            required
            value={title}
            error={error}
            onChange={(value) => {
              setTitle(value);
              setError(undefined);
              applyMetafieldsChange({
                type: 'updateMetafield',
                namespace: '$app:discount',
                key: 'title',
                value,
                valueType: 'single_line_text_field',
              });
            }}
          />
          <ChoiceList
            name="discountType"
            value={type}
            choices={[
              {label: 'Percentage discount', id: 'percentage'},
              {label: 'Fixed amount discount', id: 'fixed'},
            ]}
            onChange={(value) => {
              setType(value);
              applyMetafieldsChange({
                type: 'updateMetafield',
                namespace: '$app:discount',
                key: 'type',
                value,
                valueType: 'single_line_text_field',
              });
            }}
          />
        </BlockStack>
      </Section>
    </FunctionSettings>
  );
}
