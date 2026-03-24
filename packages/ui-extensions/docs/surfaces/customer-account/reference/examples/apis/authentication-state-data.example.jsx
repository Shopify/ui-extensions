// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const authState =
    shopify.authenticationState.value;
  const isFullyAuthenticated =
    authState === 'fully_authenticated';

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Shipping Details
        </s-text>
        {isFullyAuthenticated ? (
          <s-stack direction="block" gap="small-200">
            <s-text>123 Main Street</s-text>
            <s-text>Apt 4B</s-text>
            <s-text>New York, NY 10001</s-text>
            <s-text>United States</s-text>
          </s-stack>
        ) : (
          <s-stack direction="block" gap="small-200">
            <s-text>New York, NY</s-text>
            <s-text color="subdued">
              Log in to see full address details.
            </s-text>
          </s-stack>
        )}
      </s-stack>
    </s-box>
  );
}
