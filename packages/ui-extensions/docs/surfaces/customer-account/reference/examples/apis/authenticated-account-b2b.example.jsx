// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const purchasingCompany =
    shopify.authenticatedAccount.purchasingCompany
      .value;

  if (!purchasingCompany) {
    return (
      <s-text color="subdued">
        Shopping as an individual customer.
      </s-text>
    );
  }

  const {company, location} = purchasingCompany;

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          B2B Account
        </s-text>
        <s-text>Company: {company.id}</s-text>
        <s-text>Location: {location?.id}</s-text>
      </s-stack>
    </s-box>
  );
}
