// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {shippingAddress} =
    shopify.checkoutSettings.value;

  const isEditable = shippingAddress?.isEditable;

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Shipping Address
        </s-text>
        {isEditable ? (
          <s-stack direction="block" gap="small-200">
            <s-text>
              You can update your shipping address
              before the order ships.
            </s-text>
            <s-button>Edit address</s-button>
          </s-stack>
        ) : (
          <s-text color="subdued">
            The shipping address for this order
            cannot be changed.
          </s-text>
        )}
      </s-stack>
    </s-box>
  );
}
