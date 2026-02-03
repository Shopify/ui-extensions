import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [removed, setRemoved] = useState(false);

  const handleRemove = () => {
    const deprecatedKeys = ['old_setting', 'legacy_config'];

    const changes = deprecatedKeys.map((key) => ({
      type: 'removeMetafield',
      namespace: 'routing',
      key,
    }));

    shopify.applyMetafieldsChange(changes);
    setRemoved(true);
  };

  return (
    <s-function-settings>
      <s-stack direction="block">
        <s-text>Rule priority: {data.rule.priority}</s-text>
        <s-text>Current settings: {data.rule.metafields.length}</s-text>
        <s-button onClick={handleRemove}>Remove Deprecated Settings</s-button>
        {removed && <s-banner status="success">Deprecated settings removed</s-banner>}
      </s-stack>
    </s-function-settings>
  );
}
