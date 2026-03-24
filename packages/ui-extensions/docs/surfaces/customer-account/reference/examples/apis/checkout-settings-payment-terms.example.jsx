// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {paymentTermsTemplate} =
    shopify.checkoutSettings.value;

  if (!paymentTermsTemplate) {
    return null;
  }

  const {dueDate, name} = paymentTermsTemplate;

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Payment Terms
        </s-text>
        <s-text>Terms: {name}</s-text>
        {dueDate && (
          <s-text>
            Due date:{' '}
            {new Date(
              dueDate,
            ).toLocaleDateString()}
          </s-text>
        )}
        <s-text color="subdued">
          Payment is expected according to the
          agreed B2B terms.
        </s-text>
      </s-stack>
    </s-box>
  );
}
