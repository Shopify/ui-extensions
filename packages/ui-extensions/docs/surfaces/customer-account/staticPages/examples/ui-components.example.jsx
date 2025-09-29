import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-stack direction="block">
      <s-image src="https://cdn.shopify.com/YOUR_IMAGE_HERE" />
      <s-stack>
        <s-heading>Heading</s-heading>
        <s-text type="small">Description</s-text>
      </s-stack>
      <s-button
        onClick={() => {
          console.log('button was pressed');
        }}
      >
        Button
      </s-button>
    </s-stack>
  );
}
