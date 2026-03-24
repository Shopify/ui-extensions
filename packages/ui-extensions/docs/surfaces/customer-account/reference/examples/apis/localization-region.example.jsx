// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const country =
    shopify.localization.country.value;
  const market =
    shopify.localization.market.value;

  if (!country) {
    return (
      <s-text color="subdued">
        Region information unavailable.
      </s-text>
    );
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Regional Information
        </s-text>
        <s-divider />
        <s-text>
          Shipping to: {country.isoCode}
        </s-text>
        {market && (
          <s-text color="subdued">
            Market: {market.handle}
          </s-text>
        )}
        {country.isoCode === 'US' && (
          <s-banner tone="info">
            US orders typically arrive within 3–5
            business days.
          </s-banner>
        )}
        {country.isoCode === 'CA' && (
          <s-banner tone="info">
            Canadian orders may be subject to
            customs duties.
          </s-banner>
        )}
      </s-stack>
    </s-box>
  );
}
