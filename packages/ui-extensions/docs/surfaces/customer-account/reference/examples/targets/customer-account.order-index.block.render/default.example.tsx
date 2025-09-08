import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-text>
      I am a block extension that renders in the
      Orders section
    </s-text>
  );
}
