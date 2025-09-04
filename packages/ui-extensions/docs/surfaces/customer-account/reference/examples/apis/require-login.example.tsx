import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
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
