import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const metafields =
    shopify.appMetafields.value;

  const careInstructions = metafields.find(
    (entry) =>
      entry.target.type === 'product' &&
      entry.metafield.namespace === 'custom' &&
      entry.metafield.key === 'care_instructions',
  );

  if (!careInstructions) {
    return null;
  }

  return (
    <s-box>
      <s-text type="strong">
        Care instructions
      </s-text>
      <s-text>
        {careInstructions.metafield.value}
      </s-text>
    </s-box>
  );
}
