import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <>
      <s-button commandFor="order-actions-menu">Manage</s-button>
      <s-menu
        id="order-actions-menu"
        accessibilityLabel="List of order actions"
      >
        <s-button onClick={() => console.log('Submit problem')}>
          Submit problem
        </s-button>
        <s-button href="https://shopify.com">Request return</s-button>
        <s-button tone="critical">Cancel order</s-button>
      </s-menu>
    </>
  );
}
