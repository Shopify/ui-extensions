import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  return (
    <s-button
      onClick={() => {
        shopify.navigation.navigate(
          'extension://orders',
        );
      }}
    >
      Navigate to orders path
    </s-button>
  );
}
