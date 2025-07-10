import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-stack
            direction="vertical"
            paddingHorizontal="Small"
            paddingVertical="Small"
          >
            <s-text>{`Text element ${count}`}</s-text>
          </s-stack>
  );
}