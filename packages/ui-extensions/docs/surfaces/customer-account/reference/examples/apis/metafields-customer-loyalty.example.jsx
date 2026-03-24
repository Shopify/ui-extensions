import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const metafields =
    shopify.appMetafields.value;

  const loyaltyEntry = metafields.find(
    (entry) =>
      entry.target.type === 'customer' &&
      entry.metafield.namespace === 'loyalty' &&
      entry.metafield.key === 'tier',
  );

  if (!loyaltyEntry) {
    return null;
  }

  const tier = loyaltyEntry.metafield.value;

  return (
    <s-banner>
      <s-text>
        Your loyalty tier:{' '}
        <s-text type="strong">{tier}</s-text>
      </s-text>
    </s-banner>
  );
}
