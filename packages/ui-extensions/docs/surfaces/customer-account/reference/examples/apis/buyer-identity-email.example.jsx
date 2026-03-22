// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const buyerIdentity =
    shopify.buyerIdentity;
  const email = buyerIdentity.email?.value;
  const phone = buyerIdentity.phone?.value;

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Contact Information
        </s-text>
        {email && (
          <s-text>Email: {email}</s-text>
        )}
        {phone && (
          <s-text>Phone: {phone}</s-text>
        )}
      </s-stack>
    </s-box>
  );
}
