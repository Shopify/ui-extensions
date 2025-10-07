import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-banner>
      Your return request has been received and is
      processing
    </s-banner>
  );
}
