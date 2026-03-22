// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const authState =
    shopify.authenticationState.value;

  if (authState === 'fully_authenticated') {
    return (
      <s-box padding="base">
        <s-stack direction="block" gap="small-200">
          <s-text type="strong">
            Order Actions
          </s-text>
          <s-button>Request a return</s-button>
          <s-button>Report an issue</s-button>
        </s-stack>
      </s-box>
    );
  }

  return (
    <s-banner tone="info">
      Log in to access order actions like returns
      and issue reporting.
    </s-banner>
  );
}
