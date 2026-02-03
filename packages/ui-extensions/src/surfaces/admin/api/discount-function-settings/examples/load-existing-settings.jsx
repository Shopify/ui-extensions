import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const initializeSettings = async () => {
      const existingSettings = data.metafields.reduce((acc, field) => {
        acc[field.key] = field.value;
        return acc;
      }, {});

      setSettings(existingSettings);

      if (!existingSettings.eligible_tags) {
        await shopify.applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'discount-config',
          key: 'eligible_tags',
          value: JSON.stringify(['vip', 'wholesale']),
          valueType: 'json',
        });
      }
    };

    initializeSettings();
  }, [data]);

  return (
    <s-function-settings>
      <s-text>Current settings:</s-text>
      {Object.entries(settings).map(([key, value]) => (
        <s-text key={key}>
          {key}: {String(value)}
        </s-text>
      ))}
    </s-function-settings>
  );
}
