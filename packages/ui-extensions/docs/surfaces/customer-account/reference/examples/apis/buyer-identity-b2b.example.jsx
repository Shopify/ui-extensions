// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const purchasingCompany =
    shopify.buyerIdentity?.purchasingCompany?.value;

  if (!purchasingCompany) {
    return null;
  }

  const {company, location} = purchasingCompany;

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Business Order
        </s-text>
        <s-text>Company: {company.name}</s-text>
        <s-text>Location: {location.name}</s-text>
        <s-text color="subdued">
          This order was placed through a B2B
          account.
        </s-text>
      </s-stack>
    </s-box>
  );
}
