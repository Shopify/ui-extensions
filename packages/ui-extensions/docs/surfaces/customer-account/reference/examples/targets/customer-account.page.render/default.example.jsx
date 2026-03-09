import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-page heading="Full Page Extension">
      <s-text>This is a full page extension.</s-text>
    </s-page>
  );
}
