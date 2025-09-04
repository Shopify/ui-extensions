import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-page heading="Order #1411" subheading="Confirmed Oct 5">
      <s-button
        slot="primary-action"
        onClick={() => console.log('Primary action')}
      >
        Buy again
      </s-button>
      <s-button
        slot="secondary-actions"
        onClick={() => console.log('Secondary action 1')}
      >
        Secondary action 1
      </s-button>
      <s-button
        slot="secondary-actions"
        onClick={() => console.log('Secondary action 2')}
      >
        Secondary action 2
      </s-button>
      <s-button
        slot="breadcrumb-actions"
        accessibilitylabel="Button"
        href="shopify://customer-account/orders"
      />
      Content
    </s-page>
  );
}
