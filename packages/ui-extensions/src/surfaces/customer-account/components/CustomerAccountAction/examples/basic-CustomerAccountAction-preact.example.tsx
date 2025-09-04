import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-customer-account-action heading="Edit order">
      Extension content
      <s-button slot="primary-action" onClick={() => shopify.close()}>
        Close
      </s-button>
    </s-customer-account-action>
  );
}
