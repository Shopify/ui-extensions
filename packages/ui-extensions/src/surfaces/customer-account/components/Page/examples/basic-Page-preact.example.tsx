import {render} from 'preact';

export default async () => {
  render(<App />, document.body);
}

function App() {
  return (
    <s-page heading="Order #1411" subheading="Confirmed Oct 5">
      <s-button
        slot="primary-action"
        onClick={() => console.log('Primary action')}
      >
        Primary action
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
