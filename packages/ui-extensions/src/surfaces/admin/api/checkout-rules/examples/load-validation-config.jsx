import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [mode, setMode] = useState('loading');
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const initializeSettings = async () => {
      if (data.validation) {
        const config = data.validation.metafields.reduce((acc, field) => {
          acc[field.key] = field.value;
          return acc;
        }, {});
        
        setSettings(config);
        setMode('edit');
      } else {
        await shopify.applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'validation',
          key: 'default_rule',
          value: 'require_minimum_cart_total',
          valueType: 'single_line_text_field',
        });
        
        setMode('created');
      }
    };

    initializeSettings();
  }, [data]);

  return (
    <s-function-settings>
      {mode === 'loading' && <s-spinner />}
      {mode === 'edit' && (
        <>
          <s-text>Editing existing validation</s-text>
          {Object.entries(settings).map(([key, value]) => (
            <s-text key={key}>
              {key}: {value}
            </s-text>
          ))}
        </>
      )}
      {mode === 'created' && <s-text>Created new validation configuration</s-text>}
    </s-function-settings>
  );
}
