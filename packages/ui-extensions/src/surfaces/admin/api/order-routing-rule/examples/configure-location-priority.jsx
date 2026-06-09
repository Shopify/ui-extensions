import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [preferred, setPreferred] = useState('gid://shopify/Location/123456789');
  const [fallback, setFallback] = useState('gid://shopify/Location/987654321');

  const handleSave = () => {
    shopify.applyMetafieldsChange([
      {
        type: 'updateMetafield',
        namespace: 'routing',
        key: 'preferred_location',
        value: preferred,
        valueType: 'single_line_text_field',
      },
      {
        type: 'updateMetafield',
        namespace: 'routing',
        key: 'fallback_location',
        value: fallback,
        valueType: 'single_line_text_field',
      },
    ]);
  };

  return (
    <s-function-settings>
      <s-text-field
        label="Preferred location ID"
        value={preferred}
        onChange={(value) => setPreferred(value)}
      />
      <s-text-field
        label="Fallback location ID"
        value={fallback}
        onChange={(value) => setFallback(value)}
      />
      <s-button onClick={handleSave}>Save Location Priority</s-button>
    </s-function-settings>
  );
}
