// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [showDetails, setShowDetails] =
    useState(false);
  const authState =
    shopify.authenticationState.value;

  async function viewSensitiveDetails() {
    if (authState !== 'fully_authenticated') {
      await shopify.requireLogin();
      return;
    }
    setShowDetails(true);
  }

  if (showDetails) {
    return (
      <s-box padding="base">
        <s-stack direction="block" gap="small-200">
          <s-text type="strong">
            Order Details
          </s-text>
          <s-text>
            Tracking: 1Z999AA10123456784
          </s-text>
          <s-text>
            Carrier: UPS Ground
          </s-text>
        </s-stack>
      </s-box>
    );
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text>
          Log in to view sensitive order details
          like tracking numbers.
        </s-text>
        <s-button onClick={viewSensitiveDetails}>
          View details
        </s-button>
      </s-stack>
    </s-box>
  );
}
