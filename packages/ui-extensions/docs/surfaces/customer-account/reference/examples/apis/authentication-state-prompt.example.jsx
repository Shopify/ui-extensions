// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const authState =
    shopify.authenticationState.value;

  if (authState === 'pre_authenticated') {
    return (
      <s-banner tone="warning">
        <s-stack direction="block" gap="small-200">
          <s-text>
            You are viewing a limited version of
            this page. Log in to see full order
            details and manage your account.
          </s-text>
          <s-button
            onClick={() => shopify.requireLogin()}
          >
            Log in
          </s-button>
        </s-stack>
      </s-banner>
    );
  }

  return (
    <s-text color="subdued">
      You are fully authenticated.
    </s-text>
  );
}
