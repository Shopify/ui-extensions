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
    return null;
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Welcome back!
        </s-text>
        <s-text color="subdued">
          Customer ID: {customer.id}
        </s-text>
      </s-stack>
    </s-box>
  );
}
