import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="Home" title="Home">
          <s-button
            title="Print"
            onpress={() =>
              api.print.print('/documents/test-print')
            }
          />
          <s-print-preview src="/documents/test-print" />
        </s-screen>
  );
}