import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  return (
    <s-button-group accessibilityLabel="Order actions">
      <s-button slot="primary-action" variant="primary">
        Pay now
      </s-button>
      <s-button slot="secondary-actions" variant="secondary">
        Edit order
      </s-button>
      <s-button slot="secondary-actions" variant="secondary">
        Cancel order
      </s-button>
    </s-button-group>
  );
}
