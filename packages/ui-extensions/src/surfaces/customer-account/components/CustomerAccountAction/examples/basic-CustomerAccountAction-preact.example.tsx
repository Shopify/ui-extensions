import {render} from 'preact';

export default async () => {
  render(<App />, document.body);
};

function App() {
  return (
    <s-customer-account-action heading="Edit order">
      Extension content
      <s-button slot="primary-action" onClick={() => shopify.close()}>
        Close
      </s-button>
    </s-customer-account-action>
  );
}
