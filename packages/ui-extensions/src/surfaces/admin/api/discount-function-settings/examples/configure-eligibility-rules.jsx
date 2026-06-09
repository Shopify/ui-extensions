import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [tags, setTags] = useState('vip, wholesale, premium');
  const [maxUses, setMaxUses] = useState('5');

  const handleSave = async () => {
    await shopify.applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'discount-config',
      key: 'eligible_customer_tags',
      value: JSON.stringify(tags.split(',').map((t) => t.trim())),
      valueType: 'json',
    });

    await shopify.applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'discount-config',
      key: 'max_uses_per_customer',
      value: maxUses,
      valueType: 'number_integer',
    });
  };

  return (
    <s-function-settings>
      <s-text-field
        label="Eligible customer tags (comma-separated)"
        value={tags}
        onChange={(value) => setTags(value)}
      />
      <s-number-field
        label="Max uses per customer"
        value={maxUses}
        onChange={(value) => setMaxUses(value)}
      />
      <s-button onClick={handleSave}>Save Eligibility Rules</s-button>
    </s-function-settings>
  );
}
