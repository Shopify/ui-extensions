// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [submitted, setSubmitted] =
    useState(false);

  async function initiateReturn() {
    await shopify.requireLogin();

    const authState =
      shopify.authenticationState.value;
    if (authState !== 'fully_authenticated') {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <s-banner tone="success">
        Your return request has been submitted.
        We will send a confirmation email shortly.
      </s-banner>
    );
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Need to return an item?
        </s-text>
        <s-text>
          You will be asked to log in before
          submitting a return request.
        </s-text>
        <s-button onClick={initiateReturn}>
          Start a return
        </s-button>
      </s-stack>
    </s-box>
  );
}
