// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const customer =
    shopify.buyerIdentity?.customer?.value;
  const email = shopify.buyerIdentity?.email?.value;

  if (customer) {
    return (
      <s-box padding="base">
        <s-stack direction="block" gap="small-200">
          <s-text type="strong">
            Registered Customer
          </s-text>
          <s-text>
            Thank you for being a member! Check
            your account for exclusive offers.
          </s-text>
        </s-stack>
      </s-box>
    );
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Guest Checkout
        </s-text>
        <s-text>
          Order confirmation sent to {email}.
          Create an account to track future orders.
        </s-text>
      </s-stack>
    </s-box>
  );
}
