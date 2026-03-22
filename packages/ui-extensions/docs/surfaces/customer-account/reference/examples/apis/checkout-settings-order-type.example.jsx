// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {orderSubmission} =
    shopify.checkoutSettings.value;

  const isDraftOrder =
    orderSubmission === 'DRAFT_ORDER';

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">Order Type</s-text>
        {isDraftOrder ? (
          <s-banner tone="info">
            This is a draft order. It will be
            finalized once payment is confirmed.
          </s-banner>
        ) : (
          <s-text color="subdued">
            Standard order — payment has been
            processed.
          </s-text>
        )}
      </s-stack>
    </s-box>
  );
}
