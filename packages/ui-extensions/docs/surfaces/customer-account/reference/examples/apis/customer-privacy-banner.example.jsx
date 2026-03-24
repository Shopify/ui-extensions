// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {shouldShowBanner} =
    shopify.customerPrivacy.value;

  if (!shouldShowBanner) {
    return null;
  }

  async function acceptAll() {
    await shopify.applyTrackingConsentChange({
      type: 'changeVisitorConsent',
      analytics: true,
      marketing: true,
      preferences: true,
      saleOfData: false,
    });
  }

  async function declineAll() {
    await shopify.applyTrackingConsentChange({
      type: 'changeVisitorConsent',
      analytics: false,
      marketing: false,
      preferences: false,
      saleOfData: true,
    });
  }

  return (
    <s-banner tone="info">
      <s-stack direction="block" gap="small-200">
        <s-text>
          We use cookies to improve your
          experience. Choose your preferences.
        </s-text>
        <s-stack direction="inline" gap="base">
          <s-button onClick={acceptAll}>
            Accept all
          </s-button>
          <s-button
            variant="secondary"
            onClick={declineAll}
          >
            Decline all
          </s-button>
        </s-stack>
      </s-stack>
    </s-banner>
  );
}
