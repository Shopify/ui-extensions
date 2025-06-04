import {render} from 'preact';

export default async () => {
  render(<App />, document.body);
}

function App() {
  async function reportAnIssue() {
    await shopify.requireLogin();
    // send a request to backend
  }

  return (
    <s-button onClick={reportAnIssue}>
      Report an issue
    </s-button>
  );
}
