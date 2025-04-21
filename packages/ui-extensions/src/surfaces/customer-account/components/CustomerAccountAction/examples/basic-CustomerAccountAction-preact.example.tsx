import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  return (
    <s-customer-account-action heading="Extension title">
      Extension content
      <s-button slot="primaryAction" onClick={() => shopify.close()}>
        Click to close
      </s-button>
    </s-customer-account-action>
  );
}
