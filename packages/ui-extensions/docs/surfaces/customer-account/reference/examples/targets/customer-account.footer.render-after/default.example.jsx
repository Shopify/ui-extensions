import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-stack direction="block">
      <s-text>
        target: {shopify.extension.target}
      </s-text>
    </s-stack>
  );
}
