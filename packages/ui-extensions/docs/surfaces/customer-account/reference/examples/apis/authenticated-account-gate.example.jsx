// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const customer =
    shopify.authenticatedAccount.customer.value;

  if (!customer) {
    return (
      <s-banner tone="warning">
        Sign in to access loyalty rewards and
        order tracking features.
      </s-banner>
    );
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Loyalty Rewards
        </s-text>
        <s-text>
          You have earned 1,250 points on this
          order.
        </s-text>
        <s-button>View rewards</s-button>
      </s-stack>
    </s-box>
  );
}
