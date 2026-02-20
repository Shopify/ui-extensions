import {useState} from 'react';
import {reactExtension, useApi, FunctionSettings, TextField, Section} from '@shopify/ui-extensions-react/admin';

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
  const [name, setName] = useState(settings.name || '');
  const [error, setError] = useState();
  const {applyMetafieldsChange} = useApi();

  return (
    <FunctionSettings onError={(errors) => setError(errors[0]?.message)}>
      <Section heading="Validation settings">
        <TextField
          label="Rule name"
          name="name"
          value={name}
          error={error}
          onChange={(value) => {
            setName(value);
            setError(undefined);
            applyMetafieldsChange({
              type: 'updateMetafield',
              namespace: '$app:validation',
              key: 'name',
              value,
              valueType: 'single_line_text_field',
            });
          }}
        />
      </Section>
    </FunctionSettings>
  );
}
